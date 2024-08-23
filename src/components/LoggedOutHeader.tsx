import React from 'react';
import { Text, Image, View } from 'react-native';
import styles from '../stylesheets/signInScreen.styles';

function LoggedOutHeader() {
  return (
    <View style={styles.loggedOutHeaderContainer}>
      <Image
        source={require('../../assets/images/somalogo.png')} 
        style={{ width: 92, height: 24 }}
      />
    </View>
  );
}

export default LoggedOutHeader;
