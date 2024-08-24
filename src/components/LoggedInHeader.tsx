import React from 'react';
import { Text, Image, View } from 'react-native';
import styles from '../stylesheets/dashboardScreen.styles';

function LoggedInHeader() {
  return (
    <View style={styles.loggedInHeaderContainer}>
      <Image
        source={require('../../assets/images/test_profile_pic.png')}
        style={{ width: 32, height: 32 }}
      />
      <View style={styles.headerLogoContainer}>
        <Image
          source={require('../../assets/images/somalogo.png')} 
          style={{ width: 92, height: 24 }}
        />
      </View>
      
    </View>
  );
}

export default LoggedInHeader;
