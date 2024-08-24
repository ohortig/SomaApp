import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from '../stylesheets/signInScreen.styles';

type SignInButtonProps = {
     onPress: () => void;
};

const SignInButton: React.FC<SignInButtonProps> = ({ onPress }) => {
  return (
     <Pressable
         style={({ pressed }) => [
               {
                    backgroundColor: pressed ? '#714DFF' : '#8F73FF', // changes color when pressed
               },
               styles.signInButton,
          ]}
          onPress={onPress}
     >
          <Text style={styles.signInText}>Sign In</Text>
     </Pressable>
  );
}

export default SignInButton;
