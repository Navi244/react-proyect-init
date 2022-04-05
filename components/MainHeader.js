import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MainHeader = ({title})=>{
  return(
    <View style={headerStyles.container}>
      <Text style={headerTitle.title}>{title}</Text>
    </View>
  )
};

const headerStyles = StyleSheet.create({
  container: {display: 'flex', justifyContent: 'flex-end', flexWrap:'nowrap' }
});

const headerTitle = StyleSheet.create({
  title: {
    color: '#fff',
    flexGrow: 1
  }
})

export default MainHeader;