import React from "react";
import { View, Text } from "react-native-web";
import MultipleButtons from "../components/MultipleButtons"

const buttons = [{id:1, name: "Personales", page: "first"}, {id:2, name: "Amigos", page: "second"}];

const Statistics = ()=>{
  return(
    <View>
      <MultipleButtons buttonsData ={buttons}></MultipleButtons>
    </View>
  )
}

export default Statistics;