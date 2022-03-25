import React from "react";
import { StyleSheet, View } from "react-native";
import {Text, Button} from "react-native-elements"

const MainButtons = () => {
  return (
    <View style={mainCategories.container}>
      <View style={mainCategoriesButtons.mainButtons}>
        <View style={homeButtons.button}>
          <Button
            color="#841584"
            titleStyle={{ color: 'black' }}
            buttonStyle={{ borderRadius: 10, backgroundColor: '#FFFFFF', }}
            containerStyle={{shadowOffset:{  width: 4,  height: 4,  },
            shadowColor: 'black',
            shadowOpacity: 0.2,
            borderRadius: 10}}
            title="Enrutamiento"></Button>
        </View>
        <View style={homeButtons.button}>
          <Button
            color="#841584"
            titleStyle={{ color: 'black' }}
            buttonStyle={{ borderRadius: 10, backgroundColor: '#FFFFFF',  }}
            title="Alarma"></Button>
        </View>
      </View>
      <View style={mainCategoriesButtons.mainButtons}>
        <View style={homeButtons.button}>
          <Button
            color="#841584"
            titleStyle={{ color: 'black' }}
            buttonStyle={{ borderRadius: 10, backgroundColor: '#FFFFFF' }}
            title="Luz"></Button>
        </View>
        <View style={homeButtons.button}>
          <Button
            color="#841584"
            titleStyle={{ color: 'black' }}
            buttonStyle={{ borderRadius: 10, backgroundColor: '#FFFFFF' }}
            title="Right button"></Button>
        </View>
      </View>
      <View style={mainCategoriesButtons.mainButtons}>
        <View style={homeButtons.button}>
          <Button
            color="#841584"
            titleStyle={{ color: 'black' }}
            buttonStyle={{ borderRadius: 10, backgroundColor: '#FFFFFF' }}
            title="Amigos"></Button>
        </View>
        <View style={homeButtons.button}>
          <Button
            color="#841584"
            titleStyle={{ color: 'black' }}
            buttonStyle={{ borderRadius: 10, backgroundColor: '#FFFFFF' }}
            title="Entrenamiento"></Button>
        </View>
      </View>
    </View>
  )
};

const homeButton = StyleSheet.create({
  button: {
    borderRadius: 20
  }
})

const mainCategories = StyleSheet.create({
  container: {
    marginTop: '1rem'
  }
});

const mainCategoriesButtons = StyleSheet.create({
  mainButtons: {
    display: 'flex',
    flexDirection: 'row'
  }
});

const homeButtons = StyleSheet.create({
  button: {
    margin: 1,
    flexGrow: 1,
    flexWrap: 'wrap',
    maxWidth: '50%',
    padding: '0.5rem',
  }
})

export default MainButtons;