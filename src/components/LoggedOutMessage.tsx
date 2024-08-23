import React from 'react';
import { Text, Image, View } from 'react-native';
import styles from '../stylesheets/signInScreen.styles';

function LoggedOutMessage() {
  return (
    <View style={styles.loggedOutHeaderMessage}>
      <View>
        <Text style={styles.headerText}>Welcome Back!</Text>
        <Text style={styles.subHeaderText}>Please enter your details.</Text>
      </View>
      <Image
        source={require('../../assets/icons/lightning.png')} 
        style={{ width: 48, height: 48, marginLeft: 25 }}
      />
    </View>
  );
}

export default LoggedOutMessage;
