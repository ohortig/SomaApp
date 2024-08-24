import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from '../stylesheets/dashboardScreen.styles';

type GoalWidgetProps = {
  dashboardData: any;
};

const GoalWidget: React.FC<GoalWidgetProps> = ({ dashboardData }) => {
  return (
    <View style={styles.goalWidgetContainer}>
	 <Image 
	   source={require('../../assets/icons/dark_lightning_icon.png')}
	   style={{ width: 22, height: 29 }}
	 />
	 <View>
		<Text style={styles.goalRestaurantText}>{dashboardData.restaurant.name}'s Goal</Text>
		<Text style={styles.goalText}>Lorem ipsum dolor sit amet 25%.</Text>
		<Text style={styles.goalRewardText}>Check Reward 🎁</Text>
	 </View>
	 <Pressable 
	   style={({ pressed }) => [{
			backgroundColor: pressed ? '#EEEBEB' : '#FFFFFF', // changes color when pressed
		},
		styles.goalWidgetButton,
	   ]}
	   onPress={() => alert('Feature coming soon')}  
	 >
	   <Image
		source={require('../../assets/icons/topright_arrow.png')}
		style={{ width: 24, height: 24 }}
	   />
	 </Pressable>
    </View>
  );
};

export default GoalWidget;
