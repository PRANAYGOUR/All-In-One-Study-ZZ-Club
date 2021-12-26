import React, { Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons";
import Grade from "./screens/Grade";
import QuizScreen from "./screens/QuizScreen";
import sixthGradeScreen from "./screens/sixthGradeScreen";
import { createStackNavigator } from '@react-navigation/stack';
import firebase from "firebase";
import seventhGradeScreen from "./screens/seventhGradeScreen"
import eightGradeScreen from "./screens/eightGradeScreen";
import sixthMaths from "./screens/sixthSubjectsScreens/sixthMaths";
import sixthScience from "./screens/sixthSubjectsScreens/sixthScience";
import sixthSocial from "./screens/sixthSubjectsScreens/sixthSocial";
import sixthEnglish from "./screens/sixthSubjectsScreens/sxithEnglish"
import seventhMaths from "./screens/seventhSubjectsScreens/seventhMaths";
import seventhScience from "./screens/seventhSubjectsScreens/seventhScience";
import seventhSocial from "./screens/seventhSubjectsScreens/seventhSocial";
import seventhEnglish from "./screens/seventhSubjectsScreens/seventhEnglish";
import LoginScreen from "./screens/LoginScreen";
import eightMaths from "./screens/eightSubjectsScreens/eightMaths";
import eightSciecne from "./screens/eightSubjectsScreens/eightScience";
import eightSocial from "./screens/eightSubjectsScreens/eightSocial";
import eightEnglish from "./screens/eightSubjectsScreens/eightEnglish";
import allsubjects from "./screens/allsubjects";





const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
       
       <Stack.Screen name="Grade" component={Grade} />
        <Stack.Screen name="eightMaths" component={eightMaths} />
         <Stack.Screen name="eightScience" component={eightSciecne} />
          <Stack.Screen name="eightSocial" component={eightSocial} />
           <Stack.Screen name="eightEnglish" component={eightEnglish} />
        <Stack.Screen name="sixthGradeScreen" component={sixthGradeScreen} />
        <Stack.Screen name="seventhGradeScreen" component={seventhGradeScreen} />
         <Stack.Screen name="eightGradeScreen" component={eightGradeScreen} />
         <Stack.Screen name="sixthMaths" component={sixthMaths} />
         <Stack.Screen name="sixthScience" component={sixthScience} />
         <Stack.Screen name="sixthSocial" component={sixthSocial} />
         <Stack.Screen name="sixthEnglish" component={sixthEnglish} />
          <Stack.Screen name="seventhMaths" component={seventhMaths} />
           <Stack.Screen name="seventhScience" component={seventhScience} />
            <Stack.Screen name="seventhSocial" component={seventhSocial} />

            <Stack.Screen name="seventhEnglish" component={seventhEnglish} />

 <Stack.Screen name="allsubjects" component={allsubjects} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}