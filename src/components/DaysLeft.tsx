import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../stylesheets/dashboardScreen.styles';

type DaysLeftProps = {
  dashboardData: any;
  clock: boolean;
};

const DaysLeft: React.FC<DaysLeftProps> = ({ dashboardData, clock }) => {
  // get amount of time left to complete quiz
  const weekDate = new Date(dashboardData.quizzes[0].week);
  console.log(weekDate);
  const targetDate = new Date(weekDate);
  targetDate.setDate(targetDate.getDate() + 7);
  const today = new Date();
  const timeDiff = targetDate.getTime() - today.getTime();
  const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // days left to complete quiz
  if(clock) {
    return (
      <View style={{ flexDirection: 'row', marginHorizontal: 20, justifyContent: 'center', alignContent: 'center' }}>
        <Image
          source={(require('../../assets/icons/clock_icon.png'))}
          style={{ width: 14, height: 14 }}
        />
        <Text style={[styles.daysLeftText, { marginHorizontal: 5 }]}>{daysLeft} days left</Text>
      </View>
    );
  } else {
    return (
      <Text style={[styles.daysLeftText, { fontSize: 12 }]}>{daysLeft} days left</Text>
    )
  }
};

export default DaysLeft;
