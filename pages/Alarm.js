import {View, StyleSheet, Text, Pressable} from "react-native";
const axios = require('axios').default;


const sendAlarmActive = ()=>{
  axios.get('http://localhost:3000/alarm/active')
  .then(({data})=>{
    console.log(data.alarm.active);
  })
  .catch((error)=>{
    console.log(error);
  })
}

const Alarm = ()=>{
  return (
    <View style={container.container}>
      <View style={container.firstSpace}></View>
      <View style={container.button}>
        <View style={container.buttonContainer}>
          <Pressable onPress={()=>sendAlarmActive()}>
            <Text style={container.buttonText}>Activar alarma</Text>
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
export default Alarm;