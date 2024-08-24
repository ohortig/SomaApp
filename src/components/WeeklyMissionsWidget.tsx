import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from '../stylesheets/dashboardScreen.styles';
import DaysLeft from './DaysLeft';

type WeeklyMissionWidgetProps = {
  dashboardData: any;
};

const WeeklyMissionsWidget: React.FC<WeeklyMissionWidgetProps> = ({ dashboardData }) => {
  return (
	<View style={{ marginBottom: 20 }}>
		<View style={styles.weeklyMissionsHeaderWidget}>
			<Text style={styles.bodyTitleText}>Weekly Missions</Text>
			<DaysLeft dashboardData={dashboardData} clock={true}/>
		</View>
		<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
			<View style={{ flexDirection: 'column', }}>
				<View style={styles.missionContainer}>
					<Image
						source={require('../../assets/icons/chat_icon.png')}
						style={{ height: 64, width: 64, marginVertical: 10 }}
					/>
					<Pressable style={styles.missionStartNowButton} onPress={() => alert('Feature coming soon')}>
						<Text style={{ color: 'white' }}>Start Now</Text>
					</Pressable>
				</View>
				<Text style={{ marginTop: 5, color: '#2E3339', fontSize: 14 }}>{dashboardData.quizzes[0].title}</Text>
				<DaysLeft dashboardData={dashboardData} clock={false}/>
			</View>
			<View style={{ flexDirection: 'column', }}>
				<View style={[styles.missionContainer, { backgroundColor: '#FFE6D3' }]}>
					<Image
						source={require('../../assets/icons/stock_icon.png')}
						style={{ height: 64, width: 64, marginVertical: 10 }}
					/>
					<Pressable style={[styles.missionStartNowButton, { backgroundColor: '#FF8C35' }]} onPress={() => alert('Feature coming soon')}>
						<Text style={{ color: 'white' }}>Start Now</Text>
					</Pressable>
				</View>
				<Text style={{ marginTop: 5, color: '#2E3339', fontSize: 14 }}>Undefined</Text>
				<DaysLeft dashboardData={dashboardData} clock={false}/>
			</View>
		</View>
	</View>
  );
};

export default WeeklyMissionsWidget;
