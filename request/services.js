import { config } from "../config/config";
const axios = require('axios').default;

const alarmActive = ()=>{
  return new Promise((resolve, reject)=>{
    axios.get(config.host + '/alarm/active')
    .then((data)=>{
      console.log(data)
      return data
    })
    .catch(()=>{
      return error
    })
  });
}

export {
  alarmActive
}