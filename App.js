import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState, createContext } from 'react';
import QuizScreen from './QuizScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AntDesign } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import ResultsScreen from './ResultsScreen';

export const MyVariableContext = createContext();

export default function App() {
  const [myVariable, setMyVariable] = useState(false);

  const updateVariable = () => {
    setMyVariable(!myVariable);
  };

  const handleIconPress = () => {
    updateVariable('yo');
  };

  const Stack = createNativeStackNavigator();

  return (
  <MyVariableContext.Provider value={{ myVariable, updateVariable }}>
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent={true} />

      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SAT: Math Section" component={QuizScreen} options={{
          headerRight: () => (
            <TouchableOpacity onPress={handleIconPress} style={{right: 8,}}>
              <AntDesign name="check" size={28} color="black" />
            </TouchableOpacity>
          ),
        }} />
        <Stack.Screen name="Results" component={ResultsScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    </MyVariableContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8EAED',
  },
  questionText: {
    fontSize: 24,
    marginVertical: 20,
  },
  answerText: {
    fontSize: 18,
    marginVertical: 20,
  },
  header: {
    position: 'absolute',
    backgroundColor: '#3d8fff',
    width: '100%',
    top: 0,
  },
  hidden: {
    visibility: 'hidden',
  },
});

