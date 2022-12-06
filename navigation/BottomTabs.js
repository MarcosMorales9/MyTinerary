import * as React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home";
import CitiesScreen from "../screens/cities";
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import DetailsScreen from "../screens/Details";
import { NavigationContainer } from "@react-navigation/native";

const cityStackNavigator = createNativeStackNavigator();

function MyStack(){
  return(
    <cityStackNavigator.Navigator>

      <cityStackNavigator.Screen 
        name="Cities"
        component={CitiesScreen}
      />
    <cityStackNavigator.Screen 
      name="Details"
    component={DetailsScreen}
    />
    </cityStackNavigator.Navigator>
  )
}



const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>

    <Tab.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#fd9233',},
      headerTitleStyle: {
        color: 'black'
      },
      tabBarStyle: { backgroundColor: '#fd9233', color:"black",},
    }}>
           <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={24} color="black" /> 
            )
          }}
          
          />
      <Tab.Screen 
      name="Cities"
      component={MyStack}
        options={{
          headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="map" size={24} color="black" />
            )
          }} />
    </Tab.Navigator>
          </NavigationContainer>
  );
}

export default MyTabs;