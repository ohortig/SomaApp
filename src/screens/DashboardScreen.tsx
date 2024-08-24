import React, { useState } from 'react';
import { View, Text, Pressable, Alert } from 'react-native';

import { storeToken, getToken } from '../storage';

import styles from '../stylesheets/dashboardScreen.styles';

const DashboardScreen = () => {
     return (
          <View style={{ backgroundColor: 'white', flex:1, justifyContent: 'center', alignItems: 'center' }}>
               <Text style={styles.headerText}>Dashboard Screen</Text>
          </View>
     );
};

export default DashboardScreen;