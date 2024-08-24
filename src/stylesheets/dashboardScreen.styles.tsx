import { StyleSheet, ViewStyle, TextStyle, Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// global variables
const violet = '#120845';
const violet_half_opacity = '#12084580';
const charcoal = '#344054';
const blue = '#8F73FF';
const white = '#FFFFFF';
const gray = '#F1F1F1';
const metal = '#2E3339';

const headerTextSize = 24;
const subHeaderTextSize = 14;
const bodyTextSize = 14;
const linkTextSize = 14;

interface Styles {
     headerText: TextStyle;
     subHeaderText: TextStyle;
     bodyText: TextStyle;
     linkText: TextStyle;
     quickFactText: TextStyle;

     mainContainer: ViewStyle;
     loggedInHeaderContainer: ViewStyle;
     headerLogoContainer: ViewStyle;
     quickFactsContainer: ViewStyle;
     quickFactBubble: ViewStyle;
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
     quickFactText: {
          color: metal,
          fontSize: 12,
     },

     mainContainer: {
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: white,
          paddingHorizontal: 20,
     },
     loggedInHeaderContainer: {
          flexDirection: 'row',
          height: screenHeight * 0.06,
          width: screenWidth,
          justifyContent: 'space-between',
          alignItems: 'center',
     },
     headerLogoContainer: {
          position: 'absolute',
          left: '50%',
          transform: [{translateX: -66}],
     },
     quickFactsContainer: {
          flexDirection: 'row',
          width: screenWidth - 40,
          justifyContent: 'space-evenly',
     },
     quickFactBubble: {
          backgroundColor: gray,
          borderRadius: 16,
          width: screenWidth * 0.28,
          height: screenHeight * 0.08,
          alignItems: 'center',
          paddingVertical: 8,
          paddingHorizontal: 4,
     },
});

export default styles;