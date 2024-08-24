import React from 'react';
import { View, TextInput } from 'react-native';
import styles from '../stylesheets/signInScreen.styles';

type EmailInputProps = {
  value: string;
  onChangeText: (text: string) => void;
};

const EmailInput: React.FC<EmailInputProps> = ({ value, onChangeText }) => {
  return (
    <View style={styles.textInputContainer}>
          <TextInput
              placeholder="Enter your email"
              value={value}
              onChangeText={onChangeText}
              autoCapitalize="none"
              style={styles.bodyText}
          />
    </View>
  );
};

export default EmailInput;
