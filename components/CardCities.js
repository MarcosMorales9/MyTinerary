import { Text, View, Image, Dimensions, ScrollView } from 'react-native'
import React, { Component } from 'react'

export default function CardCities( {city,navigation} ) {

    return (
        
        <ScrollView>
            <View style={{ padding: 10, margin: 5}}>
                <Text onPress={()=> navigation.navigate('Details',{id:city._id})}  style={{ backgroundColor: "#fd9233", textAlign: "center", borderColor: "#fd9233" }}>{city.cities}</Text>
                <Image
                    source={{
                        uri: `${city.image}`,
                    }}
                    style={{ width: 300, height: 100, borderWidth: 5, borderColor: "#fd9233" }}
                />
            </View>
        </ScrollView>
    )
}