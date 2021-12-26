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
import allsubjects from "./allsubjects";


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
                <ImageBackground source={require('../assets/bg1.jpg')} style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>All In One Study/ZZ Club</Text>
                    </View>
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("sixthGradeScreen")
                    }>
                        <Text style={styles.routeText}>Grade - 6</Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                        <Image source={require("../assets/boardicon1.png")} style={styles.iconImage}></Image>

                 </TouchableOpacity>

                  <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("seventhGradeScreen")
                    }>
                        <Text style={styles.routeText}>Grade - 7</Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                        <Image source={require("../assets/penicon1.png")} style={styles.iconImage}></Image>
                         
                         </TouchableOpacity>
                      
  <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("eightGradeScreen")
                    }>
                         <Text style={styles.routeText}>Grade - 8</Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                        <Image source={require("../assets/bookicon1.png")} style={styles.iconImage}></Image>
                
                        </TouchableOpacity>
                        

                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        height : 600,
     
    },
   
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center",
        top : 10
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