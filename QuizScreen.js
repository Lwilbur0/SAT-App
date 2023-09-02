import { StyleSheet, Text, SafeAreaView, View, Pressable, ScrollView, InteractionManager } from "react-native";
import React, { useState, useEffect, useContext, useRef } from "react";
import questions from "./questions.js";
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { AntDesign } from "@expo/vector-icons";
import { Image } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MathView from 'react-native-math-view';
import { MyVariableContext } from './App';





export let questionsRight = 0;
export let questionsAnswered = 0;
export let totalQuestions = questions.length;


const randomizeData = () => {
  const newData = [...questions];
  for (let i = newData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newData[i], newData[j]] = [newData[j], newData[i]];
  }
  return newData;
};
const data = randomizeData()

const QuizScreen = () => {
  console.log(questionsRight + "/" + questionsAnswered)
  const [isLoaded, setIsLoaded] = useState(false);
  const [initialRender, setInitialRender] = useState(true);
  // let data = questions;

  useEffect(() => {
    questionsRight = 0;
    questionsAnswered = 0;
    if (initialRender) {
      setInitialRender(false);
    } else {
      setIsLoaded(true);
    }
  }, [initialRender]);
  const navigation = useNavigation();
  const [points, setPoints] = useState(0);
  const [index, setIndex] = useState(0);
  const [answerStatus, setAnswerStatus] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [isPressed, setIsPressed] = useState(false);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [counter, setCounter] = useState(15);
  const [containerHeight, setContainerHeight] = useState(0);
  let interval = null;
  const progressPercentage = Math.floor((index / totalQuestions) * 100);

  const { myVariable, updateVariable } = useContext(MyVariableContext);
  const isInitialRender = useRef(true)

  randomizeData();

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false
    } else {
      // Run code when the variable changes (check icon is pressed)
      questionsRight = Math.floor(questionsRight/2);
      questionsAnswered = Math.floor(questionsAnswered/2);
      navigation.navigate("Results", {
        answers: answers,
        points: points,
      });
    }
  }, [myVariable]);
  
  useEffect(() => {
    if (selectedAnswerIndex !== null) {
      const currentQuestion = data[index];
      const isCorrect = selectedAnswerIndex === currentQuestion.correctAnswerIndex;

      setPoints(points => points + (isCorrect ? 10 : 0));
      setAnswerStatus(isCorrect);
      setAnswers(prevAnswers => [...prevAnswers, { question: index + 1, answer: isCorrect, image: index + 1 }]);
    }
  }, [selectedAnswerIndex]);

  useEffect(() => {
    setSelectedAnswerIndex(null);
    setAnswerStatus(null);
  }, [index]);

  useEffect(() => {
    if (index + 1 > data.length) {
      clearTimeout(interval);
      navigation.navigate("Results", {
        answers: answers,
        points: points,
      });
    }
  }, [index]);
  
  const handleLayout = (event) => {
    const { height } = event.nativeEvent.layout.height + 500;
    setContainerHeight(height);
  };

  function incrementRight() {
    questionsRight = questionsRight + 1;
  }
  function incrementQuestion() {
    questionsAnswered = questionsAnswered + 1;
  }
  const currentQuestion = data[index];
  const containerStyle = currentQuestion.image ? styles.quizContainerWithImage : styles.quizContainer;
  
  const handleOptionPress = (optionIndex) => {
      
      setSelectedAnswerIndex(optionIndex);
      setShowCorrectAnswer(true);
  };

  const Stack = createNativeStackNavigator();
  
  const formatText = (text) => {
    const parts = text.split(/(\$.*?\$)/g); // Split the text based on LaTeX equations and keep the dollar signs
    // console.log("P" + parts)
    return parts.map((part, index) => {
      if (part.match(/^\$.+\$$/)) {
        // Render LaTeX equations using MathView component or any other desired formatting
        const math = part.replace(/^\$/, '').replace(/\$$/, '');
        // console.log("M" + math)
        return {
          type: 'math',
          content: math, // Remove the leading and trailing dollar signs
          key: `math_${index}`,
        };
      }
  
      // Render non-LaTeX text
      // console.log("T" + part)
      return {
        type: 'text',
        content: part,
        key: `text_${index}`,
      };
    });
  };
  
  


  return (
    <SafeAreaView style={styles.areaContainer}>
    <ScrollView contentContainerStyle={[styles.container, { height: containerHeight }]} onLayout={handleLayout}>
    <View style={containerStyle}>
          {currentQuestion.image && <Image source={currentQuestion.image} style={styles.image} />}
          <Text style={styles.question}>
          {formatText(currentQuestion?.question).map((element) => {
            if (element.type === 'math') {
              return (
                <MathView
                  key={element.key}
                  math={`\\large ${element.content}`}
                  fontSize = {40}
                />
              );
            } else if (element.type === 'text') {
              return (
                <Text key={element.key} style={styles.normalText}>
                  {element.content}
                </Text>
              );
            }
          })}
          </Text>
          <View style={styles.optionsContainer}>
            {currentQuestion?.options.map((item, optionIndex) => (
              <Pressable
                key={optionIndex}
                onPress={() =>
                  selectedAnswerIndex === null && setSelectedAnswerIndex(optionIndex)
                }
                style={[
                  styles.option,
                  selectedAnswerIndex != null && optionIndex === currentQuestion.correctAnswerIndex
                    ? styles.correctOption
                    : selectedAnswerIndex !== null && selectedAnswerIndex === optionIndex
                    ? styles.wrongOption
                    : null,
                ]}
              >
                {selectedAnswerIndex != null &&
                optionIndex === currentQuestion.correctAnswerIndex ? (
                  <AntDesign
                    style={styles.icon}
                    name="check"
                    size={20}
                    color="white"
                  />
                ) : selectedAnswerIndex != null && selectedAnswerIndex === optionIndex ? (
                  <AntDesign
                    style={styles.icon}
                    name="closecircle"
                    size={20}
                    color="white"
                  />
                ) : (
                  <Text style={styles.optionText}>{item.options}</Text>
                )}
                <Text style={styles.answerText}> 
                {formatText(item.answer).map((element) => {
                  if (element.type === 'math') {
                    return (
                      <Text style = {{alignItems: 'center', textAlign: 'center',}}>
                      {'\u200B'}
                      <MathView
                        key={element.key}
                        math={`\\normalsize ${element.content}`}
                        fontSize = {40}
                        style={{alignItems: 'center',}}
                      />
                      </Text>
                    );
                  } else if (element.type === 'text') {
                    return (
                      <Text key={element.key}>
                        {element.content}
                      </Text>
                    );
                  }
                })}
                </Text>
              </Pressable>
            ))}
          </View>
          {answerStatus != null && !answerStatus && currentQuestion?.explanation != null && <Text style = {styles.explanation}> <Text style = {{textDecorationLine: 'underline',}}>Explanation</Text>: 
          {formatText(currentQuestion?.explanation).map((element) => {
            if (element.type === 'math') {
              return (
                <MathView
                  key={element.key}
                  math={element.content}
                  fontSize = {40}
                />
              );
            } else if (element.type === 'text') {
              return (
                <Text key={element.key} style={styles.normalText}>
                  {element.content}
                </Text>
              );
            }
          })}</Text>}
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <View style={styles.answerStatusContainer}>
          {answerStatus !== null && (
            <Text style={styles.answerStatusText}>
              {answerStatus ? "Correct Answer" : "Wrong Answer"}
              {answerStatus && incrementRight()}
              {incrementQuestion()}
            </Text>
          )}
          {index + 1 >= questions.length ? (
            <Pressable
              onPress={() =>
                {!isPressed && setIsPressed(true);
                navigation.navigate("Results", {
                  points: points,
                  answers: answers,
                });
                questionsRight = Math.floor(questionsRight/2);
                questionsAnswered = Math.floor(questionsAnswered/2);
              }
              }
              disabled = {isPressed}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Done</Text>
            </Pressable>
          ) : answerStatus !== null && (
            <Pressable
              onPress={() => {setIndex(index => index + 1) }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Next Question</Text>
            </Pressable>
          )}
        </View>
        <View style = {{
          width: '100%',
          height: '3%',
          marginBottom: 25,
          marginTop: 10,
          borderRadius: 10,
          backgroundColor: '#D3D3D3',
          opacity: '200%',
        }}></View>
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>{index + 1}/{totalQuestions} questions answered</Text>
          <View style={styles.progressBar}>
            <View
              style={{
                width: `${progressPercentage}%`,
                height: "100%",
                backgroundColor: "#FFC0CB",
                borderRadius: 12,
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  areaContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flexGrow: 1,
  },
  quizContainer: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 0,
  },
  quizContainerWithImage: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 6,
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 200,
    justifyContent: "center",
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 12,
    marginBottom: 10,
  },
  // AAAAA
  explanation: {
    fontSize: 21,
    fontWeight: 200,
    top: 35,
    marginBottom: 26,
  },
  optionsContainer: {
    marginTop: 12,
    top: 50,
    textAlign: 'center',
    alignItems: 'center'
  },
  option: {
    backgroundColor: '#fff',
    textAlign: 'center',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    width: 250,
    flexDirection: "row",
    borderWidth: 0.5,
    marginVertical: 10,
    borderRadius: 30,
    paddingHorizontal: 10,
    borderColor: '#D3D3D3',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    top: -30,
  },
  correctOption: {
    backgroundColor: "green",
  },
  wrongOption: {
    backgroundColor: "red",
  },
  icon: {
    borderWidth: 0.5,
    borderColor: "#00FFFF",
    width: 40,
    height: 40,
    borderRadius: 20,
    padding: 10,
  },
  optionText: {
    borderColor: "#55BCF6",
    textAlign: "center",
    borderWidth: 1.5,
    width: 40,
    height: 40,
    borderRadius: 20,
    padding: 10,
  },
  answerText: {
    textAlign: "center",
    maxWidth: '80%',
    alignSelf: 'center',
    right: 10,
    flex: 1,
  },
  bottomContainer: {
    backgroundColor: "white",
    alignItems: "center",
    paddingVertical: 10,
  },
  answerStatusContainer: {
    marginTop: 10,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 7,
  },
  answerStatusText: {
    fontSize: 17,
    textAlign: "center",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "green",
    padding: 10,
    marginVertical: 10,
    borderRadius: 6,
    textAlign: 'center',
    },
  buttonText: {
  color: "white",
  textAlign: 'center',
  },
  progressContainer: {
  marginBottom: -10,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginHorizontal: 10,
  },
  progressText: {
  flex: 0,
  },
  progressBar: {
  flex: 3,
  height: 10,
  backgroundColor: "#D3D3D3",
  borderRadius: 20,
  marginLeft: 10,
  },
  });

  
  export default QuizScreen;   
