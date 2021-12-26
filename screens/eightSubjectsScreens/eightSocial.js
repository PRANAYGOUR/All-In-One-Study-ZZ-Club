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

export default class seventhSocial extends Component {
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
                    <Text style={styles.routeText}> Geography:-</Text>
                 


                 
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}> Chapter 1: Resources </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}>Chapter 2: Land, Soil, Water, Natural Vegetation and Wildlife Resources  </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}> Chapter 3: Mineral and Power Resources </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}>  Chapter 4: Agriculture</Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}> Chapter 5: Industries </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}> Chapter 6: Human Resources </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>
                         <Text style={styles.routeText}> civics:-</Text>
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}>Chapter 1: The Indian Constitution  </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>


                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}>Chapter 2: Understanding Secularism  </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}> Chapter 3: Why do we need a Parliament? </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}>  Chapter 4: Understanding Laws</Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}>Chapter 5: Judiciary  </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}>  Chapter 6: Understanding Our Criminal Justice System</Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>


                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}> Chapter 7: Understanding Marginalisation </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}> Chapter 8: Confronting Marginalisation </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

                 
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}> Chapter 9: Public Facilities </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

             
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}>Chapter 10: Law and Social Justice  </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>


<Text style={styles.routeText}> History </Text>
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}> Chapter 1: How, When and Where </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}> Chapter 2: From Trade to Territory </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}>Chapter 3: Ruling the Countryside  </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}> Chapter 4: Tribals, Dikus and the Vision of a Golden Age </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}>Chapter 5: When People Rebel  </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}> Chapter 6: Colonialism and the City </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}> Chapter 7: Weavers, Iron Smelters and Factory Owners </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>


                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}>Chapter 8: Civilising the “Native”, Educating the Nation  </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}> Chapter 9: Women, Caste and Reform </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}> Chapter 10: The Changing World of Visual Arts </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}> Chapter 11: The Making of the National Movement: 1870s – 1947 </Text>
                        <Text style={styles.knowMore}>{"Know More --->"}</Text>
                        <Text style={styles.bgDigit}></Text>
                       

                 </TouchableOpacity>

                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("allsubjects")
                    }>
                        <Text style={styles.routeText}> Chapter 12: India after Independence </Text>
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

