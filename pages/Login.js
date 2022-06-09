import React, {useState, useEffect} from "react";
import reactDom from "react-dom";
import { View, TextInput, StyleSheet, Button, Modal, Pressable, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { loginRequest } from "../request/services";
import AlertLogin from "../components/AlertLogin";

async function requestLogin(user, password){
  const endpoint = '/login'
  try {
    const response = await loginRequest(user, password, endpoint);
    return response;
  }catch(err){
    console.log(err)
  }
}

const renderModal = ()=>{
  return(<AlertLogin isVisible={true}></AlertLogin>)
}

const Login = ( )=>{
  const navigation = useNavigation();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <TextInput 
        style={loginStyles.input}
        value={user}
        onChangeText={setUser}
        placeholder="Usuario" />
      <TextInput
        style={loginStyles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Button 
        color="#bebebe"
        onPress={
          ()=>requestLogin(user, password).then(data=>{
            (!data === 200) ? setModalVisible(true) : navigation.navigate('Home');
          })
        }
        title="Entrar">
      </Button>
          {
            useEffect(()=>{{
              if(modalVisible === true){
                //!-----------------------------
                //!como renderizar el AlertLogin
                //!-----------------------------
                return(<AlertLogin isVisible={modalVisible}></AlertLogin>)
              }
            } }, [modalVisible])
          }
    </View>
    )}

const loginStyles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default Login;