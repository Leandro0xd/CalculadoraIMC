import { StyleSheet, View } from 'react-native';
import Title from './src/components/Title.js';
import FormIMC from './src/components/FormIMC.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <FormIMC />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 16,
  },
});
