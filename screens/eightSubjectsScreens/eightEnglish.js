

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
    Image,
    ScrollView
} from "react-native";

export default class Grade extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('./bg10.jpg')} style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>All In One Study/ZZ Club</Text>
                    </View>
                   <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("eightGradeScreen");
          }}>
          <Image
            style={styles.back}
            source={require("../back.png")}
          />
        </TouchableOpacity>
                    <ScrollView>
                  <Text style={styles.routeText}>  HoneyDew:- </Text>
                  
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}>Chapter 1: The Best Christmas Present in the World
&
The Ant and the Cricket </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}>Chapter 2:

The Tsunami
&
Geography Lesson  </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}> Chapter 4:

Bepin Choudhury’s Lapse of Memory
&
The Last Bargain </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}> Chapter 5:

The Summit Within
&
The School Boy </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}> Chapter 6:

This is Jody’s Fawn </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}> Chapter 7:

A Visit to Cambridge
&
When I set out for Lyonnesse </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}> Chapter 8:

A Short Monsoon Diary
&
On the Grasshopper and Cricket </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>


                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}> Chapter 9:

The Great Stone Face–I </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}> Chapter 10:

The Great Stone Face–II </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

                   




<Text style={styles.routeText}> An Alien Hand </Text>                       


 <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}> Unit 1 – How The Camel Got His Hump </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}> Unit 2 – Children At Work </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}> Unit 3 – The Selfish Giant </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>


                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}> Unit 4 – The Treasure Within </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}>Unit 5 – Princess September  </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

                 
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}> Unit 6 – The Fight </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

             
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}> Unit 7 – The Open Window </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>
            
 

                  <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}> Unit 8 – Jalebis </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

   <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}> Unit 9 – The Comet — I </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

   <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}> Unit 10 – The Comet — II </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

   <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}> Unit 11 – Ancient Education System of India </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>




</ScrollView>

                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
      back: {
    width: 30,
    height: 30,
    marginBottom: 28,
  },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        height : 800,
      
     
    },
   
    titleBar: {
       
       
        
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "Black",
       
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        marginTop: 75,
        paddingLeft: 80
    },
    knowMore: {
        paddingLeft: 30,
        color: "red",
        fontSize: 15,
        paddingLeft: 90
    },
    bgDigit: {
        position: "absolute",
        color: "rgba(183, 183, 183, 0.5)",
        fontSize: 150,
        right: 20,
        bottom: -15,
        zIndex: -1
    },
    iconImage: {
        position: "center",
        height: 60,
        width: 60,
        resizeMode: "contain",
        marginLeft : 100,
        top: -110
    }
});

