import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from '../stylesheets/signInScreen.styles';

function SignInButton() {
  return (
     <Pressable
         style={({ pressed }) => [
               {
                    backgroundColor: pressed ? '#714DFF' : '#8F73FF', // changes color when pressed
               },
               styles.signInButton,
          ]}
          onPress={() => alert('Pressable Button Pressed!')}
     >
          <Text style={styles.signInText}>Sign In</Text>
     </Pressable>
  );
}

export default SignInButton;
