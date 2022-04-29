import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TelaInicial from './src/components/TelaInicial';

export default function App() {
  return (
    <View style={styles.container}>
      <TelaInicial/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C6FBFB',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
