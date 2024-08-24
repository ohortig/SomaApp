import { StyleSheet, ViewStyle, TextStyle, Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// global variables
const violet = '#120845';
const violet_half_opacity = '#12084580';
const charcoal = '#344054';
const blue = '#8F73FF';
const white = '#FFFFFF';
const gray = '#D0D5DD';

const headerTextSize = 24;
const subHeaderTextSize = 14;
const bodyTextSize = 14;
const linkTextSize = 14;
const signInTextSize = 16;
const signUpGoogleTextSize = 16;

interface Styles {
  headerText: TextStyle;
  subHeaderText: TextStyle;
  bodyText: TextStyle;
  linkText: TextStyle;
  signInText: TextStyle;
  signUpGoogleText: TextStyle;

  mainContainer: ViewStyle;
  loggedOutHeaderContainer: ViewStyle;
  loggedOutHeaderMessage: ViewStyle;
  loggedOutHeaderMessageTextContainer: ViewStyle;
  signInButton: ViewStyle,
  signUpGoogleButton: ViewStyle,
  bottomContainer: ViewStyle,
  textInputContainer: ViewStyle
};

const styles = StyleSheet.create<Styles>({
  headerText: {
    fontSize: headerTextSize,
    color: violet,
    textAlign: 'left',
    marginVertical: 5,
    //fontFamily: 'MonaSansExpanded-Medium',
  },
  subHeaderText: {
    fontSize: subHeaderTextSize,
    color: violet_half_opacity,
    textAlign: 'left',
    //fontFamily: 'MonaSans-Medium',
  },
  bodyText: {
    fontSize: bodyTextSize,
    color: charcoal,
    textAlign: 'left',
    marginVertical: 5,
    //fontFamily: 'MonaSans-Medium',
  },
  linkText: {
    fontSize: linkTextSize,
    color: blue,
    textAlign: 'left',
  },
  signInText: {
    fontSize: signInTextSize,
    color: white,
    textAlign: 'center',
    //fontFamily: 'MonaSans-SemiBold',
  },
  signUpGoogleText: {
    fontSize: signUpGoogleTextSize,
    color: charcoal,
    //fontFamily: 'MonaSans-SemiBold',
  },

  mainContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: white,
  },
  loggedOutHeaderContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 12,
    height: screenHeight * 0.06,
    width: screenWidth,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  loggedOutHeaderMessage: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 40, 
    width: screenWidth,
  },
  loggedOutHeaderMessageTextContainer: {
    flex: 1,
  },
  signInButton: {
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 20,
    height: screenHeight * 0.05,
    width: screenWidth - 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: white,
    marginVertical: 5,
  },
  signUpGoogleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    height: screenHeight * 0.05,
    width: screenWidth - 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: gray,
    marginVertical: 5,
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  textInputContainer: {
    height: screenHeight * 0.05,
    width: screenWidth - 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: gray,
    paddingLeft: 5,
    justifyContent: 'center',
  },
});

export default styles;
