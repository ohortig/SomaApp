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

interface Styles {
     headerText: TextStyle;
     subHeaderText: TextStyle;
     bodyText: TextStyle;
     linkText: TextStyle;
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
});

export default styles;