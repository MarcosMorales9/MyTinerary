import { Text, View, Image, ImageBackground, TouchableOpacity,Button } from 'react-native'
import * as React from 'react'

 const image = {uri: "https://www.bbva.com/wp-content/uploads/2017/12/billetes-avion-viajes-tarifas-comparacion-precios-ahorro-compra-vuelos-bbva-e1513873444593.jpg"}

export default function HomeScreen() {
    return (
      <View
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: 800,
      }}>
         <ImageBackground source={image} style={{ flex: 2 }}>

         <Text
          style={{
            marginTop: 30,
            color: "black",
            fontSize: 25,
            textAlign: "center",
          }}
          >
          Welcome To My Tineraryy
        <Image 
          source={{
            uri: "https://mytinerary-morales-front.herokuapp.com/assets/logo.png",
          }}
          style={{ width: 200, height: 200,alignSelf:"center" }}
          />
        </Text>
        <Text>MyTinerary</Text>
        <Text
          style={{marginTop: 10,color: "white",fontSize: 20,textAlign: "center",width: 260,
          marginLeft: "auto",marginRight: "auto",
          }}
        >
          Find your perfect trip, designed by insiders who know and love their cities!
        </Text>
        <TouchableOpacity
            onPress={() => props.navigation.navigate('Cities')}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            style={{alignItems:"center",justifyContent:"center",marginTop:30, backgroundColor:"white",width:100,height:50,borderRadius:20,marginLeft:"auto",marginRight:"auto"}}
        >
            <Text style={{color:"blue"}}>Cities</Text>
        </TouchableOpacity>


        </ImageBackground>
      </View>
    )
  }