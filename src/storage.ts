import * as SecureStore from 'expo-secure-store';

export const storeToken = async (token: string): Promise<void> => {
  try {
    await SecureStore.setItemAsync('userToken', token);
    console.log('Token', token, 'stored successfully');
  } catch (error) {
    console.error('Failed to store the token securely:', error);
  }
};

export const getToken = async (): Promise<string | null> => {
  try {
    const token = await SecureStore.getItemAsync('userToken');
    if (token) {
      console.log('Token', token, 'retrieved successfully');
    } else {
      console.log('No token found');
    }
    return token;
  } catch (error) {
    console.error('Failed to retrieve the token securely:', error);
    return null;
  }
};
