import React from "react";
import { View, Pressable, Text, StyleSheet} from "react-native";

function firstButton(){
  console.log('Primer boton seleccionado')
}

function secondButton(){
  console.log('Segundo boton seleccionado')
}

function thirdButton(){
  console.log("Tercer botón seleccionado")
}

const MultipleButtons = ()=>{
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <View styles={styles.firstButtonText}>
          <Pressable onPress={()=>firstButton()}>
            <Text>Principiante</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.column}>
        <View styles={styles.secondButtonText}>
          <Pressable onPress={()=>secondButton()}>
            <Text>Intermedio</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.column}>
        <View styles={styles.thirdButtonText}>
          <Pressable onPress={()=>thirdButton()}>
            <Text>Avanzado</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    position: 'relative'
  },
  column: {
    flexGrow: 1,
    textAlign: 'center',
    padding: '0.5rem',
    margin: '0.5rem',
    backgroundColor: 'red',
    borderRadius: '5%'
  },
  firstButtonText: {
    alignSelf: 'center',
    position: 'absolute',
    top: '1rem'
  },
  secondButtonText: {
    alignSelf: 'center',
    position: 'absolute'
  },
  thirdButtonText: {
    alignSelf: 'center',
    position: 'absolute',
    top: '3rem'
  }
})

export default MultipleButtons;