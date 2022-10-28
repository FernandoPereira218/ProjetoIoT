import { StatusBar } from 'expo-status-bar';
import { Fragment, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import CustomButton from './src/components/CustomButton';
import Index from './src/views';

export default function App() {
  const [teste, setTeste] = useState('teste');

  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app! {teste}</Text>
    //   <StatusBar style="auto" />
    //   <CustomButton />
    // </View>
    <Fragment>
      <Index />
    </Fragment>
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
