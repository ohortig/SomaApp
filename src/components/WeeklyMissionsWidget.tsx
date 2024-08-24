import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from '../stylesheets/dashboardScreen.styles';
import DaysLeft from './DaysLeft';

type WeeklyMissionWidgetProps = {
  dashboardData: any;
};

const WeeklyMissionsWidget: React.FC<WeeklyMissionWidgetProps> = ({ dashboardData }) => {
  return (
	<View style={{ flexDirection: 'row', alignItems: 'center' }}>
		<Text style={styles.bodyTitleText}>Weekly Missions</Text>
		<DaysLeft dashboardData={dashboardData} />
	</View>
  );
};

export default WeeklyMissionsWidget;
