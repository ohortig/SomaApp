import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../stylesheets/dashboardScreen.styles';

type DaysLeftProps = {
  dashboardData: any;
};

const DaysLeft: React.FC<DaysLeftProps> = ({ dashboardData }) => {
  // get amount of time left to complete quiz
  const weekDate = new Date(dashboardData.quizzes[0].week);
  console.log(weekDate);
  const targetDate = new Date(weekDate);
  targetDate.setDate(targetDate.getDate() + 7);
  const today = new Date();
  const timeDiff = targetDate.getTime() - today.getTime();
  const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // days left to complete quiz
  return (
    <View style={{ flexDirection: 'row', marginHorizontal: 20, justifyContent: 'center', alignContent: 'center' }}>
      <Image
        source={(require('../../assets/icons/clock_icon.png'))}
        style={{ width: 14, height: 14 }}
      />
      <Text style={[styles.daysLeftText, { marginHorizontal: 3 }]}>{daysLeft} days left</Text>
    </View>
  );
};

export default DaysLeft;
