import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Principal from './components/Principal';

export default function App() {
   return (
      <View style={estilos.container}>
         <Principal />
         <StatusBar style="auto" />
      </View>
   );
}

const estilos = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff'
   }
});
