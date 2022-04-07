import React from "react";
import { Text, StyleSheet, SafeAreaView, TextInput, Button } from "react-native-web";

const Routes = ()=>{
  return(
    <SafeAreaView>
      <Text>Página de enrutamiento</Text>
      <TextInput
        style={inpunt.input}
        placeholder='Ingresa donde estás' />
      <TextInput 
        style={inpunt.input}
        placeholder='Ingresa a donde vas'/>
      <Text>Mapa de ubicación</Text>
      <Button
        color="#841584"
        titleStyle={{ color: 'black' }}
        buttonStyle={{ borderRadius: 10, backgroundColor: '#FFFFFF' }}
        containerStyle={{shadowOffset:{  width: 4,  height: 4,  },
          shadowColor: 'black',
          shadowOpacity: 0.2,
          borderRadius: 10}}
        title="Comenzar"></Button>
    </SafeAreaView>
  )
};

const inpunt = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  },
});
export default Routes;