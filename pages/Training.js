import React, { useState }  from "react";
import { StyleSheet } from "react-native";
import MultipleButtons from "../components/MultipleButtons";

const buttons = [{id:1, name: "Principiante", page: "first"}, {id:2, name: "Intermedio", page: "second"}, {id:3, name: "Avanzado", page: "thirth"}];

const Training = ()=>{
  return (
    <MultipleButtons buttonsData = {buttons}></MultipleButtons>
  );
}

const styles = StyleSheet.create({
 
});

export default Training;