
import React from "react";
import MainHeader from '../components/MainHeader';
import MainBody from '../components/MainBody';
import { StyleSheet, View, Button } from 'react-native';


const HomeCycling = ()=>{
  return (
    <View style={mainBg.bg}>
      <Button title="Enrutamiento"></Button>
      <View style={estilosHeader.container}>
        <MainHeader></MainHeader>
      </View>
      <View style={styles.container}>
        <MainBody></MainBody>
      </View>
    </View>
  )
}

const mainBg = StyleSheet.create({
  bg: {
    backgroundColor: '#eeeeee',
    padding: '1rem',
    height: '100%'
  }
})

const estilosHeader = StyleSheet.create({
  container: {
    backgroundColor: 'red'
  }
});

const styles = StyleSheet.create({
  container: {
    marginTop: "1rem"
  },
});

export default HomeCycling;

