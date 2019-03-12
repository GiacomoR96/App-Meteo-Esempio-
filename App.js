import * as React from 'react';
import { Text, View, StyleSheet, StatusBar, Image, ScrollView } from 'react-native';
import { Constants } from 'expo';

StatusBar.setHidden(true);

// You can import from local files
//import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
//import { Card } from 'react-native-paper';

const MyCard = props => (
  <View style={styles.card}>
    <View style={styles.day}>
      <Text>{props.dayWeek}</Text>
      <Text>{props.day}</Text>
    </View>
    <Image style={styles.image} source={props.image}></Image>
    <Text style={styles.description}>{props.description}</Text>
    <View style={styles.description}>
      <Text>{props.temperature}</Text>
      <Text>{props.description1}</Text>
      <Text>{props.description2}</Text>
    </View>
  </View>
);

const ListElements = [
  {dayWeek:"WED", day:"22 Apr", image:require("./assets/sun.png"), temperature:"25.1/12.8°C", description1:"Forecast: Sky is clear", description2:"Humidity: 47%"},
  {dayWeek:"THU", day:"23 Apr", image:require("./assets/sun.png"), temperature:"26.2/9.5°C", description1:"Forecast: Sky is clear", description2:"Humidity: 45%"},
  {dayWeek:"FRI", day:"24 Apr", image:require("./assets/sun.png"), temperature:"27.0/10.3°C", description1:"Forecast: Sky is clear", description2:"Humidity: 47%"},
  {dayWeek:"SAT", day:"25 Apr", image:require("./assets/clouds.png"), temperature:"27.6/16.7°C", description1:"Forecast: Sky is clear", description2:"Humidity: 0%"},
  {dayWeek:"SUN", day:"26 Apr", image:require("./assets/clouds.png"), temperature:"24.5/17.3°C", description1:"Forecast: Sky is clear", description2:"Humidity: 0%"},
  {dayWeek:"MON", day:"27 Apr", image:require("./assets/clouds.png"), temperature:"26.0/15.5°C", description1:"Forecast: Sky is clear", description2:"Humidity: 0%"},
  {dayWeek:"TUE", day:"28 Apr", image:require("./assets/sun.png"), temperature:"25.1/12.8°C", description1:"Forecast: Sky is clear", description2:"Humidity: 47%"},
  {dayWeek:"WED", day:"29 Apr", image:require("./assets/sun.png"), temperature:"25.1/12.8°C", description1:"Forecast: Sky is clear", description2:"Humidity: 47%"},
  {dayWeek:"THU", day:"30 Apr", image:require("./assets/sun.png"), temperature:"26.2/9.5°C", description1:"Forecast: Sky is clear", description2:"Humidity: 45%"},
  {dayWeek:"FRI", day:"31 Apr", image:require("./assets/sun.png"), temperature:"27.0/10.3°C", description1:"Forecast: Sky is clear", description2:"Humidity: 47%"},
];


export default class App extends React.Component {

  extrapolationList = () => (
    ListElements.map((obj,index) => (<MyCard dayWeek={obj.dayWeek} day={obj.day} image={obj.image} temperature={obj.temperature} description1={obj.description1} description2={obj.description2}></MyCard>))
  )

  render() {
    return (
      <ScrollView style={styles.container}>
        
        {this.extrapolationList()}

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  card:{
    padding:5,
    flex:1,
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    borderBottomWidth:1,
    borderColor: "grey"
  },
  day:{
    color:"black",
    fontSize:20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  image:{
    width:100,
    height:100,
  },
  description:{
    color:"black",
    fontSize:20,
    fontWeight: 'bold',
    textAlign: 'left'
  }
});
