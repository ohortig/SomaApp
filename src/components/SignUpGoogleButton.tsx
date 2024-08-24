import React from 'react';
import { Pressable, Text, Image } from 'react-native';
import styles from '../stylesheets/signInScreen.styles';

function SignUpGoogleButton() {
  return (
     <Pressable
         style={({ pressed }) => [
               {
                    backgroundColor: pressed ? '#FADEDE' : '#FFFFFF', // changes color when pressed
               },
               styles.signUpGoogleButton,
          ]}
          onPress={() => alert('Feature coming soon.')}
     >
          <Image
               source={require('../../assets/images/googlelogo.png')} 
               style={{ width: 20, height: 20, marginRight: 15 }}
          />
          <Text style={styles.signUpGoogleText}>Sign up with Google</Text>
     </Pressable>
  );
}

export default SignUpGoogleButton;
