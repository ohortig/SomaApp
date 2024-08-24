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
     goalText: TextStyle;
     goalRestaurantText: TextStyle;
     goalRewardText: TextStyle;

     mainContainer: ViewStyle;
     loggedInHeaderContainer: ViewStyle;
     headerLogoContainer: ViewStyle;
     quickFactsContainer: ViewStyle;
     quickFactBubble: ViewStyle;
     quickFactValueContainer: ViewStyle;
     goalWidgetContainer: ViewStyle;
     goalWidgetButton: ViewStyle;
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
     goalRestaurantText: {
          color: '#535D6A',
          fontSize: 12,
     },
     goalText: {
          color: metal,
          fontSize: 14,
          marginVertical: 2,
     },
     goalRewardText: {
          color: '#8292A7',
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
          marginTop: 20,
          marginBottom: 15,
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
     quickFactValueContainer: {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: white,
          borderRadius: 16,
          width: screenWidth * 0.26,
          height: screenHeight * 0.04,
          paddingVertical: 8,
          paddingHorizontal: 4,
          marginVertical: 4,
     },
     goalWidgetContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          borderColor: '#EEEBEB',
          borderWidth: 0.70,
          borderRadius: 16,
          height: screenHeight * 0.09,
          marginBottom: 20,
     },
     goalWidgetButton: {
          borderColor: '#EEEBEB',
          borderWidth: 0.70,
          borderRadius: 16,
          padding: 12,
     },
});

export default styles;