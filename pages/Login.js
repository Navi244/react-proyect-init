import React from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { loginRequest } from "../request/services";

async function requestLogin(user, password){
  const endpoint = '/login'
  try {
    const response = await loginRequest(user, password, endpoint);
    console.log(response)
  }catch(err){
    console.log(err)
  }

}

const Login = ( )=>{
  const navigation = useNavigation();
  const [user, useUser] = React.useState('');
  const [password, usePassword] = React.useState('');

  return (
    <View>
      <TextInput 
        style={loginStyles.input}
        value={user}
        onChangeText={useUser}
        placeholder="Usuario" />
      <TextInput
        style={loginStyles.input}
        value={password}
        onChangeText={usePassword}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Button 
        color="#bebebe"
        onPress={
          ()=>requestLogin(user, password).then(data=>{
            console.log(data)
            navigation.navigate('Home');
          })
        }
        title="Entrar"></Button>
    </View>
  )
}

const loginStyles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Login;