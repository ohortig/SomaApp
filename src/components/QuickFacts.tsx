import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../stylesheets/dashboardScreen.styles';

type QuickFactsProps = {
  dashboardData: any;
};

const QuickFacts: React.FC<QuickFactsProps> = ({ dashboardData }) => {
  return (
    <View style={styles.quickFactsContainer}>
      <View style={styles.quickFactBubble}>
        <Text style={styles.quickFactText}>Loyalty Points</Text>
        <View style={styles.quickFactValueContainer}>
          <Image
            source={require('../../assets/icons/star_icon.png')}
            style={{ width: 10, height: 9.5, marginLeft: 8, position: 'absolute', left: '5%' }}
          />
          <Text style={{ color: '#000000', fontSize: 12, /* fontFamily: 'Mona Sans Expanded',*/ }}>{dashboardData.stats.points}</Text> 
        </View>
      </View>
      <View style={styles.quickFactBubble}>
        <Text style={styles.quickFactText}>Cycle</Text>
        <View style={styles.quickFactValueContainer}>
          <Image
            source={require('../../assets/icons/trophy_icon.png')}
            style={{ width: 10, height: 9.5, marginLeft: 8, position: 'absolute', left: '5%' }}
          />
          <Text style={{ color: '#000000', fontSize: 12, /* fontFamily: 'Mona Sans Expanded',*/ }}>{dashboardData.restaurant.config.cycle_duration} Days</Text> 
        </View>
      </View>
      <View style={styles.quickFactBubble}>
        <Text style={styles.quickFactText}>Your Reward</Text>
        <View style={styles.quickFactValueContainer}>
          <Text style={{ color: '#000000', fontSize: 12, /* fontFamily: 'Mona Sans Expanded',*/ }}>$##.##</Text> 
        </View>
      </View>
    </View>
  );
};

export default QuickFacts;
