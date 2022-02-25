import MainHeader from './components/MainHeader';
import MainBody from './components/MainBody';
import HomeGraphics from './components/HomeGraphics';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default function App() {
  return (
    <View style={mainBg.bg}>
      <View style={estilosHeader.container}>
        <MainHeader></MainHeader>
      </View>
      <View style={styles.container}>
        <MainBody></MainBody>
      </View>
    </View>
  );
}

const mainBg = StyleSheet.create({
  bg: {
    backgroundColor: '#D3D3D3',
    padding: '1rem'
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
