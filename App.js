import * as React from "react"
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./navigation/BottomTabs";
import { Provider } from "react-redux";
import mainReducer from "./redux/reducers/mainReducer";
import { configureStore as createStore} from "@reduxjs/toolkit";
import { StatusBar } from "expo-status-bar";

export default function App() {

  const reduxStore = createStore({reducer:mainReducer})

  return (
    <React.Fragment>
    <Provider store={reduxStore}>
      <NavigationContainer>
        <MyTabs/>
      </NavigationContainer>
     </Provider>
    </React.Fragment>
  );
}