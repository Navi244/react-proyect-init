import React from "react";
import { NativeModules, NativeEventEmitter } from 'react-native';
const BleManagerModule = NativeModules.BleManager;
//var bleManager = React.NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

class BleManager{
  // constructor() {
  //   this.isPeripheralConnected = this.isPeripheralConnected.bind(this);
  // }

  // start(options) {
  //   return new Promise((fulfill, reject) => {
  //     if (options == null) {
  //       options = {};
  //     }
  //     bleManager.start(options, error => {
  //       if (error) {
  //         reject(error);
  //       } else {
  //         fulfill();
  //       }
  //     });
  //   });
  // }
}

export default BleManager;
