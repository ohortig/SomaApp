import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TestScreen = () => {
     return (
          <View style={styles.container}>
               <Text style={styles.text}>This is a test</Text>
          </View>
     );
};

const styles = StyleSheet.create({
     container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
     },
     text: {
          fontSize: 24,
          color: '#333',
     },
});

export default TestScreen;