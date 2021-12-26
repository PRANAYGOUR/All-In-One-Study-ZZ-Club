import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from "react-native";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default class allsubjects extends Component {
 
 render() {
  return (


<View>





  <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("Grade");
          }}>
          <Image
            style={styles.back}
            source={require("./back.png")}
          />

          </TouchableOpacity>

    <Text> visit this site for class 6 :- 
<a href={'https://byjus.com/ncert-solutions-class-6/'}>Google</a>
     
    
    visit this site for class 7:-
    
<a href={'https://byjus.com/ncert-solutions-class-7/'}>Google</a>
    visit this site for class 8 :-
    
<a href={'https://byjus.com/ncert-solutions-class-8/'}>Google</a>

    </Text>

     
     </View>

  );
 }
}


const styles = StyleSheet.create({
      back: {
    width: 30,
    height: 30,
    marginBottom: 28,
  }
})