import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from '../stylesheets/signInScreen.styles';

const EmailInput = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.textInputContainer}>
          <TextInput
               placeholder="Enter your email"
               value={text}
               onChangeText={(value) => setText(value)}
               autoCapitalize="none"
          />
    </View>
  );
};

export default EmailInput;
