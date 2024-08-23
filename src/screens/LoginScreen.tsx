import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LoggedOutHeader from '../components/LoggedOutHeader';

// component imports
import styles from '../stylesheets/signInScreen.styles';
import LoggedOutMessage from '../components/LoggedOutMessage';
import SignInButton from '../components/SignInButton';
import SignUpGoogleButton from '../components/SignUpGoogleButton';
import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput';

const LoginScreen = () => {
     return (
          <SafeAreaView style={styles.mainContainer}>
               <LoggedOutHeader/>
               <LoggedOutMessage/>
               <View style={{ paddingHorizontal: 20, paddingVertical: 40 }}>
                    <View style={{ marginBottom: 20 }}>
                         <Text style={styles.bodyText}>Email*</Text>
                         <EmailInput />
                         <Text style={[styles.bodyText, { marginTop: 20 }]}>Password*</Text>
                         <PasswordInput />
                         <Pressable
                              onPress={() => alert('Feature coming soon.')}
                         >
                              <Text style={[styles.linkText, { marginVertical: 20 }]}>Forgot Password?</Text>
                         </Pressable>
                    </View>
                    <SignInButton />
                    <SignUpGoogleButton />
               </View>
               <View style={styles.bottomContainer}>
                    <Text style={{ marginHorizontal: 2.5 }}>Don't have an account?</Text>
                    <Pressable
                         onPress={() => alert('Feature coming soon.')}
                    >
                         <Text style={[styles.linkText, { marginHorizontal: 2.5 }]}>Sign Up</Text>
                    </Pressable>
               </View>
          </SafeAreaView>
     );
};

export default LoginScreen;