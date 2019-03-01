import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, StatusBar, ImageBackground } from 'react-native';

StatusBar.setHidden(true);

const ObjBottom = props => (
  <View style={[styles.flex_column,styles.flex_center]}>
    <Image source={props.image} style={styles.icon}></Image>
    <Text style={styles.text}>{props.number1}</Text>
    <Text style={styles.text}>{props.number2}</Text>
    <Text style={styles.text}>{props.day}</Text>
  </View>
);

const ListBottom = [
  {image:require("./assets/weather-icon.png"), number1: "39", number2:"32", day:"Wed" },
  {image:require("./assets/weather-icon.png"), number1: "39", number2:"39", day:"Thu" },
  {image:require("./assets/weather-icon.png"), number1: "41", number2:"39", day:"Fri" },
  {image:require("./assets/weather-icon.png"), number1: "43", number2:"30", day:"Sat" },
  {image:require("./assets/weather-icon.png"), number1: "34", number2:"30", day:"Sun" }
];


const ObjMiddle = props => (
  <View style={[styles.flex_column, styles.flex_center]}>
    <Text style={styles.text}>{props.text1}</Text>
    <Text style={styles.text}>{props.text2}</Text>
  </View>
);

const ListMiddle = [
  {text1:"Humidity", text2:"65%"},
  {text1:"Wind", text2:"0 MPH%"},
  {text1:"Pressure", text2:"992 mb"}
];


//     <Image source={require("./assets/background2.jpg")} style={styles.backgroundImage}></Image>

function App(){


  estrayArrayMiddle = () => (
    ListMiddle.map( (obj,index) => <ObjMiddle text1={obj.text1} text2={obj.text2} key={index}></ObjMiddle> )
  );

  estrayArrayBottom = () => (
    ListBottom.map( (obj,index) => <ObjBottom image={obj.image} number1={obj.number1} number2={obj.number2} day={obj.day} key={index} ></ObjBottom> )
  );

  return(
    <View style={styles.container}>

      <ImageBackground source={require('./assets/background2.jpg')} style={styles.backgroundImage}>

        <View style={[styles.flex_row, styles.flex_space_between,styles.marginDefault]}>
            <Image style={styles.icon} source={require("./assets/icon-menu-apple.png")}></Image>
            <Text style={styles.text}>2:10 PM</Text>
            <Image style={styles.icon} source={require("./assets/icon-menu2-apple.png")}></Image>
          </View>

          <View style={styles.flex_center}>
          <Text style={[styles.text, {fontSize: 30}]}>Ushuaia</Text>
          <Text style={[styles.text, {fontSize: 130}]}>41</Text>
          <Text style={styles.text}>Scattered Clouds</Text>
          </View>
          
          <View style={[styles.flex_row,styles.flex_space_around,styles.marginBoxTop]}>
            {this.estrayArrayMiddle()}
          </View>

          <Image source={require("./assets/line.png")} style={[styles.flex_row,styles.line]}></Image>
          
          <View style={[styles.flex_row,styles.flex_space_around,styles.marginBoxTop]}>
          {this.estrayArrayBottom()}
          </View>
      </ImageBackground>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
//    backgroundColor:"gray"
///////////////////////////////////////////////    backgroundImage:"./assets/background2.jpg"
  //  alignItems: 'center',
  //  justifyContent: 'center',
  },
  backgroundImage:{
    flex: 1,
   // width: null,
   // height: null,
   // resizeMode:'stretch'
  },
  flex_row:{
    flexDirection:'row'
  },
  flex_column:{
    flexDirection:'column'
  },
  flex_space_between:{
    justifyContent:"space-between"
  },
  flex_space_around:{
    justifyContent:"space-around"
  },
  flex_center:{
    alignItems:'center',
  },
  flex_stretch:{
    alignItems:'stretch',
  },
  icon:{
    width:30,
    height:30
  },
  text:{
    color:"white",
    fontSize: 20
  },
  marginDefault:{
    margin:15
  },
  marginBoxTop:{
    marginTop: 20
  },
  line:{
  //  flex: 1,
    width: null,
    height: 100,  //82
    resizeMode:'stretch',
    marginTop: 20
  }
});
