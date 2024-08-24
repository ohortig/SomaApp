import React, { useState } from 'react';
import { View, Text, Pressable, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LoggedOutHeader from '../components/LoggedOutHeader';
import { storeToken, getToken } from '../storage';

// component imports
import styles from '../stylesheets/signInScreen.styles';
import LoggedOutMessage from '../components/LoggedOutMessage';
import SignInButton from '../components/SignInButton';
import SignUpGoogleButton from '../components/SignUpGoogleButton';
import EmailInput from '../components/EmailInput';
import PasswordInput from '../components/PasswordInput';

const LoginScreen = () => {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     const [error, setError] = useState('');

     const handleSignIn = async () => {
          try {
               const response = await fetch('https://soma.bknd.run/api/auth/password/login', {
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                         email,
                         password,
                    }),
               });
               console.log("Attempting to sign in...")
               console.log(JSON.stringify({
                    username: email,
                    password,
               }));
               if(response.ok) {
                    const data = await response.json();
                    // Handle successful login
                    console.log('Login successful:', data, '\n');
                    await storeToken(data.token);
               } else {
                    const errorData = await response.json();
                    // Handle failure
                    setError(errorData.message || 'Login failed, please try again.');
                    console.log('Login unsuccessful\n');
               }
          } catch (error) {
               setError('An error occured during login.\n')
          }
     };

     return (
          <SafeAreaView style={styles.mainContainer}>
               <LoggedOutHeader/>
               <LoggedOutMessage/>
               <View style={{ paddingHorizontal: 20, paddingVertical: 40 }}>
                    <View style={{ marginBottom: 20 }}>
                         <Text style={styles.bodyText}>Email*</Text>
                         <EmailInput value={email} onChangeText={setEmail}/>
                         <Text style={[styles.bodyText, { marginTop: 20 }]}>Password*</Text>
                         <PasswordInput value={password} onChangeText={setPassword} />
                         <Pressable
                              onPress={() => alert('Feature coming soon')}
                         >
                              <Text style={[styles.linkText, { marginVertical: 20 }]}>Forgot Password?</Text>
                         </Pressable>
                    </View>
                    <SignInButton onPress={handleSignIn} />
                    {error ? <Text style={[styles.bodyText, { color: 'red', marginTop: 10 }]}>{error}</Text> : null}
                    <SignUpGoogleButton />
               </View>
               <View style={styles.bottomContainer}>
                    <Text style={{ marginHorizontal: 2.5 }}>Don't have an account?</Text>
                    <Pressable
                         onPress={() => alert('Feature coming soon')}
                    >
                         <Text style={[styles.linkText, { marginHorizontal: 2.5 }]}>Sign Up</Text>
                    </Pressable>
               </View>
          </SafeAreaView>
     );
};

export default LoginScreen;