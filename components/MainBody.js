import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeGraphics from "./HomeGraphics";
import MainButtons from "./MainButtons";

const MainBody = ()=>{
  return(
    <View>
      <HomeGraphics></HomeGraphics>
      <MainButtons></MainButtons>
    </View>
  )
}

const ContaninerGraphics = StyleSheet.create({
  
})

export default MainBody;