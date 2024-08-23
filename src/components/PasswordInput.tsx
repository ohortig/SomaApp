import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from '../stylesheets/signInScreen.styles';

const PasswordInput = () => {
  const [text, setText] = useState('');

  return (
    <View style={styles.textInputContainer}>
          <TextInput
               placeholder="Create a password"
               value={text}
               onChangeText={(value) => setText(value)}
               autoCapitalize="none"
               secureTextEntry={true}
          />
    </View>
  );
};

export default PasswordInput;
