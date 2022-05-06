import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { requestService } from "../request/services"

async function sendLight(){
  const endpointLight = '/light/actve';
  try{
    const response = await requestService(endpointLight);
    console.log(response);
  }catch(err){

  }
}

const Light = ()=>{
  return (
    <View style={container.container}>
      <View style={container.firstSpace}></View>
      <View style={container.button}>
        <View style={container.buttonContainer}>
          <Pressable onPress={()=>sendLight()}>
            <Text style={container.buttonText}>Activar Luz</Text>
          </Pressable>
        </View>
      </View>
      <View style={container.secondSpace}></View>
    </View>
  )
}

const container = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  },
  firstSpace: {
    flexGrow: 1
  },
  secondSpace: {
    flexGrow: 1
  },
  button: {
    flexGrow: 5,
    position: "relative"
  },
  buttonContainer: {
    alignSelf: "center",
    position: "absolute",
    backgroundColor: "red",
    borderRadius: "50%"
  },
  buttonText: {
    paddingLeft: "1rem",
    paddingRight: "1rem",
    paddingTop: "2rem",
    paddingBottom: "2rem"
  }
})

export default Light;