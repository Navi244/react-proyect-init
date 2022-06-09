import React from "react";
import { View, Pressable, Text, StyleSheet} from "react-native";
import { useNavigation } from '@react-navigation/native';


const MultipleButtons =({buttonsData})=>{
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        {
          buttonsData.map(({id, name, page})=>{
            return(<Pressable style={styles.buttonAlign} key={id} onPress={()=> {navigation.navigate(page)}}>
              <Text>{name}</Text>
            </Pressable>)
          })
        }
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
  },
  buttonAlign: {
    paddingBottom: "1rem"
  }
})

export default MultipleButtons;