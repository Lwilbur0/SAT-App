import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Question from './Question';

const QuestionList = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const questions = [
    {
      id: 1,
      question: 'What is the capital of France?',
      text: 'bruhuhh h',
      answerOptions: [
        { id: 'a', text: 'London' },
        { id: 'b', text: 'Paris' },
        { id: 'c', text: 'Berlin' },
        { id: 'd', text: 'Madrid' },
      ],
    },
    {
      id: 2,
      question: 'What is the largest planet in the Solar System?',
      answerOptions: [
        { id: 'a', text: 'Jupiter' },
        { id: 'b', text: 'Earth' },
        { id: 'c', text: 'Mars' },
        { id: 'd', text: 'Saturn' },
      ],
    },
  ];

  const handleAnswerSelect = (questionId, answerId) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answerId,
    });
  };

  return (
    <View style={styles.container}>
      {questions.map((question) => (
        <Question
          key={question.id}
          question={question.question}
          answerOptions={question.answerOptions}
          selectedAnswer={selectedAnswers[question.id]}
          onAnswerSelect={(answerId) => handleAnswerSelect(question.id, answerId)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});

export default QuestionList;
