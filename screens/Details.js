import { View, Text, Animated, TouchableOpacity, Image, TextInput, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux"
import React from 'react'
import citiesActions from '../redux/actions/citiesActions';
import itinerariesActions from '../redux/actions/itinerariesActions';
import CardItinerary from '../components/itinerary';

export default function DetailsScreen ({route,navigation}) {
    const {id} = route.params
    console.log(id)

const dispatch = useDispatch()


    useEffect(() => {
        console.log(res)
         const res = dispatch (citiesActions.getOneCity(id)) 
        dispatch(itinerariesActions.getItinerariesFromCity(id))
        // eslint-disable-next-line

    }, [id])

    const city = useSelector((store)=> store.citiesReducer.oneCity)
console.log(city);
const itineraries = useSelector(store => store.itinerariesReducer.itineraries) 
// console.log(itineraries)

return (
    <ScrollView>
        <View style={{backgroundColor:"#6495ed"}}>
                <View style={{backgroundColor:"#6495ed"}}>
                    <ImageBackground
                     source={{
                        uri: `${city.image}`,
                        }}
                    >
                    <Text style= {styles.cityName}>{city.name}</Text>
                    </ImageBackground>
                </View>
            </View>
            <View style={{ backgroundColor:"#6495ed",height:700}}>
            {itineraries?.length > 0 ? itineraries.map(itinerary=> (<CardItinerary itineraries = {itinerary} key = {itinerary._id} /> )) 
                : 
            <Text style={{color:"white", justifyContent:"center",alignContent:"center",marginLeft:130,marginTop:200}}> No hay tineraries</Text>}
        </View>
    </ScrollView>
)

}
const styles = StyleSheet.create({
    userName: {
        marginBottom: 10,
        textAlign:'center',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'orange',
        backgroundColor:"#6495ed"
    },
    cityName: {
        color: 'orange',
        fontSize:40,
        textAlign:"center"
        },
    cityCountry:{
        color: '#4A3F35',
    }
});