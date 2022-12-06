import * as React from 'react';
import { Text, Image, StyleSheet, View, ScrollView, ImageBackground } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'

function CardItinerary({itineraries}) {
    
    return (

        <View style={{
            backgroundColor:"orange",
            margin:10,
            justifyContent:"center",
            alignContent:"center",
            alignItems:"center",
            padding:5,
            
        }}>
            <Image 
                source={{
                    uri: `${itineraries.authorimage}`,
                    }}
                style={{ width: 100, height: 100, borderRadius:100, borderWidth:3, borderColor: 'black'}}
            />
            <Text >{itineraries.itineraryName} </Text>
            <Text >{itineraries.author} </Text>
            <Text >Price:{itineraries.price}</Text>
            <Text >Duration:{itineraries.duration}⏰</Text>

        </View>
    )
}

export default CardItinerary