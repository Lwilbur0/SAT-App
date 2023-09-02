import { StyleSheet, Text, SafeAreaView, View, Pressable, ImageBackground, Animated, Image, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import Confetti from 'react-confetti';
import ConfettiCannon from 'react-native-confetti-cannon';
import WaveAnimation from './WaveAnimation';
import FastImage from 'react-native-fast-image';
import { loadFonts } from './FontLoader';


import { questionsRight, questionsAnswered, totalQuestions } from "./QuizScreen";

const ResultsScreen = () => {
    console.log( questionsRight + " " + questionsAnswered );
    const route = useRoute();
    const navigation = useNavigation();
    const wave1Transform = new Animated.Value(0);
    const wave2Transform = new Animated.Value(0);
    let score = 0;
    if (questionsRight == 0) {
        score = 200;
    }
    else {
        // score = Math.round((questionsRight/questionsAnswered) * 80) * 10;
        score = Math.round((((questionsRight/questionsAnswered) * 30 + 10) * 20)/10) * 10;
    }

    const [randomGifUrl, setRandomGifUrl] = useState('')

    const gifUrls = [
      ];

    useEffect(() => {
    const getRandomGif = () => {
        const randomIndex = Math.floor(Math.random() * gifUrls.length);
        const randomUrl = gifUrls[randomIndex];
        setRandomGifUrl(randomUrl);
    };
    getRandomGif();
}, []);

    useEffect(() => {
    Animated.loop(
        Animated.timing(wave1Transform, {
        toValue: 1000,
        duration: 30000,
        useNativeDriver: true,
        })
    ).start();
    }, [wave1Transform]);

    useEffect(() => {
    Animated.loop(
        Animated.timing(wave2Transform, {
        toValue: -1000,
        duration: 15000,
        useNativeDriver: true,
        })
    ).start();
}, [wave2Transform]);
  return (
    <SafeAreaView style={{ margin: 0, flex: 1, backgroundColor: '#0086d1', }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: '#0086d1',
          bottom: 15,
          marginBottom: -30,
        }}
      >
      <Pressable onPress={() => navigation.navigate("Home")}>
        <AntDesign
            style={{ marginLeft: 37, marginTop: 9, top: 10, }}
            name="home"
            size={34}
            color="black"
          />
        </Pressable>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 14,
          }}
        >
        <Text style={{
            marginRight:5, 
            marginTop: 15,
            fontWeight: 700,
            top: 12,
        }}>Share</Text>
          <AntDesign
            style={{ marginLeft: 0, marginRight: 16, marginTop: 12, top: 12, }}
            name="sharealt"
            size={30}
            color="black"
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginVertical: 10,
        }}
      >
      </View>

      <Pressable
        style={{
          backgroundColor: "white",
          height: 220,
          borderRadius: 7,
          marginTop: 20,
        }}
      >
        <View style ={{
            textAlign: "center",
            alignItems: 'center',
            top: 38,
        }}>
        <Text
          style={{
            color: "black",
            fontSize: 150,
            fontWeight: "500",
            textAlign: "center",
            marginTop: 8,
            marginBottom: -20,
          }}
        >
          {score}
        </Text>
        <Text style={{
            marginBottom: 0,
        }}>out of 800</Text>
        </View>
        <View style={{backgroundColor: 'white', height: 70, marginTop: -16, top: 51, alignItems: 'center' }}></View>
        <View style={{backgroundColor: 'white', height: 800, marginTop: -60, top: 90,  alignItems: 'center', borderTopWidth: 2, }}>
        <View style = {{ flexDirection: 'row', width: '87%', height: 110, top: 40, }}>
        <View style={{ flex: 1, marginTop: 5, marginRight: 4, backgroundColor: 'white', opacity: 1, padding: 5, width: '50%',borderWidth: 8, borderRadius: 20, borderColor: "#6d696c", alignItems: 'center', justifyContent: 'center', }}>
            <Text style={{ fontSize: 22, fontWeight: 500, fontFamily: 'JosefinSans-Medium', color: 'black', textAlign: 'center', alignItems: 'center', }}>
            {questionsAnswered} Questions
            </Text>
        </View>
        <View style={{ flex: 1, marginTop: 5, marginLeft: 4, backgroundColor: 'white', opacity: 1, padding: 5, width: '50%',  borderWidth: 8, borderRadius: 20, alignItems: 'center', justifyContent: 'center', borderColor: "#6d696c" }}>
            <Text style={{ fontSize: 18, fontWeight: 500, fontFamily: 'JosefinSans-Medium', color: 'black', textAlign: 'center', }}>
            {questionsRight} Correct Answers{'\n'}
            {questionsAnswered - questionsRight} Wrong Answers
            </Text>
        </View>
        </View>
        </View>
        </Pressable>
        <View style = {{ alignItems: 'center', top: 200, }}>
        <Image source={require("./cat.png")} style = {{width: 425, height: 200,}} />
        </View>
        <View style = {{ alignItems: 'center',  top: 280, }}>
        <Pressable
        onPress={() => navigation.navigate("Home")}
        style={{
            paddingVertical: 11,
            paddingHorizontal: 22,
            borderRadius: 15,
            backgroundColor: '#d55554',
            position: 'relative',
            userSelect: 'none',
            touchAction: 'manipulation',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            top: 0,
            right: 4,
            width: '70%',
            
        }}>
        <Text style = {{color: 'white', fontWeight:'600', fontSize: 25, textAlign: 'center'}}>Try Again</Text>
        </Pressable>
        </View>
        <ConfettiCannon count={300} origin={{x: -20, y: 1000}} autoStart={true} fallSpeed={1500} explosionSpeed={600} fadeOut = {true} />
        <ConfettiCannon count={300} origin={{x: 500, y: 1200}} autoStart={true} fallSpeed={1500} explosionSpeed={600} fadeOut = {true} autoStartDelay = {50} />
        </SafeAreaView>
        );
    };
    
export default ResultsScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      top: 550,
    },
    imageBackground: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    air: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      height: 500,
      zIndex: 5000,
      opacity: 1,
    },
    air1: {
      backgroundColor: 'white',
      animationName: 'wave',
    },
    air2: {
      backgroundColor: 'white',
      animationName: 'wave2',
      opacity: 0.5,
      bottom: 10,
    },
    air3: {
      backgroundColor: 'white',
      animationName: 'wave',
      opacity: 0.2,
      bottom: 15,
    },
    air4: {
      backgroundColor: 'white',
      animationName: 'wave2',
      opacity: 0.7,
      bottom: 20,
    },
  });
  
//   const waveAnimation = StyleSheet.create({
//     wave: {
//       from: {
//         translateX: '0px',
//       },
//       to: {
//         translateX: '1000px',
//       },
//     },
//     wave2: {
//       from: {
//         translateX: '0px',
//       },
//       to: {
//         translateX: '-1000px',
//       },
//     },
//   });