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

export default class seventhScreen extends Component {
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
                 
             
                  
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}>  Chapter 1: Crop Production and Management  </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}> Chapter 2: Microorganisms: Friend and Foe </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}>Chapter 3: Synthetic Fibres and Plastics  </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}> Chapter 4: Materials: Metals and Non-Metals </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}> Chapter 5: Coal and Petroleum </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}> Chapter 6: Combustion and Flame </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}> Chapter 7: Conservation of Plants and Animals </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>


                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}>Chapter 8: Cell – Structure and Functions  </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}>Chapter 9: Reproduction in Animals  </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}> Chapter 10: Reaching the Age of Adolescence </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}>Chapter 11: Force and Pressure  </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}> Chapter 12: Friction </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>


                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}>Chapter 13: Sound  </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}> Chapter 14: Chemical Effects of Electric Current </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

                 
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}> Chapter 15: Some Natural Phenomena </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

             
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}> Chapter 16: Light </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

<TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}> Chapter 17: Stars and The Solar System </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

             
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}> Chapter 18: Pollution of Air and Water </Text>
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
      back: {
    width: 30,
    height: 30,
    marginBottom: 28,
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
