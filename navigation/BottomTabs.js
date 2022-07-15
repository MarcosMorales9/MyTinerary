import * as React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home";
import CitiesScreen from "../screens/cities";


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#fd9233',},
      headerTitleStyle: {
          color: 'black'
      },
      tabBarStyle: { backgroundColor: '#fd9233' },
      }}>
      <Tab.Screen name="Home"  component={HomeScreen} />
      <Tab.Screen name="Cities" component={CitiesScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;