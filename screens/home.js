import { Text, View, Image, ImageBackground, TouchableOpacity,Button, ScrollView } from 'react-native'
import * as React from 'react'
import Carrousel from '../components/carrousel'
 const image = {uri: "https://www.bbva.com/wp-content/uploads/2017/12/billetes-avion-viajes-tarifas-comparacion-precios-ahorro-compra-vuelos-bbva-e1513873444593.jpg"}

export default function HomeScreen(props) {
    return (
      <ScrollView>

      <View
      style={{
        flex: 1,
        display: "flex",
       alignItems:'center',
        height: 675,
      }}>
         <ImageBackground source={image} style={{ flex: 1 }}>

         <Text
          style={{
            marginTop: 30,
            color: "black",
            fontSize: 25,
            textAlign: "center",
          }}
          >
          Welcome To My Tineraryy
        </Text>

          <View
          style={{
            marginTop:30,
            marginLeft:"auto",
            marginRight:"auto",
            borderWidth:2,
            width:300,
            borderColor:"red",
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center",
          }}
          >
            <Text
            style={{
              fontSize:20
            }}
            >
              MyTinerarys
            </Text>
          <Image 
          source={{
            uri: "https://mytinerary-morales-front.herokuapp.com/assets/logo.png",
          }}
          style={{ width: 100, height: 100}}
          />
          
          </View>
        <Text
          style={{marginTop: 20,color: "white",fontSize: 18,textAlign: "center",
          marginLeft: "auto",marginRight: "auto",
        }}
        >
          Find your perfect trip, designed by insiders who know and love their cities!
        </Text>

        <TouchableOpacity
            onPress={() => props.navigation.navigate('Cities')}
            title="Learn More"
            color="orange"
            accessibilityLabel="Learn more about this purple button"
            style={{alignItems:"center",justifyContent:"center",marginTop:30, backgroundColor:"orange",width:100,height:50,borderRadius:20,marginLeft:"auto",marginRight:"auto"}}
            >
            <Text style={{color:"black",backgroundColor:"orange"}}>Cities</Text>
        </TouchableOpacity>


        </ImageBackground>
      </View>
        <Carrousel/>
          </ScrollView>
    )
  }