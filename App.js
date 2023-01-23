import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TipCalculator from './TipCalculator';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Tip Calculator</Text>
      <StatusBar style="auto" />
      <TipCalculator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
