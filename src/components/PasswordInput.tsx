import React from 'react';
import { View, TextInput } from 'react-native';
import styles from '../stylesheets/signInScreen.styles';

type PasswordInputProps = {
  value: string;
  onChangeText: (text: string) => void;
};

const PasswordInput: React.FC<PasswordInputProps>  = ({ value, onChangeText }) => {
  return (
    <View style={styles.textInputContainer}>
          <TextInput
              placeholder="Create a password"
              value={value}
              onChangeText={onChangeText}
              autoCapitalize="none"
              secureTextEntry={true}
              style={styles.bodyText}
          />
    </View>
  );
};

export default PasswordInput;
