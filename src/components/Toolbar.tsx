import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import styles from '../stylesheets/dashboardScreen.styles';

type ToolbarProps = {
  dashboardData: any;
};

const Toolbar: React.FC<ToolbarProps> = ({ dashboardData }) => {
	return (
		<View style={styles.toolbarContainer}>
		  <Pressable onPress={() => alert('Feature coming soon')} style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' }}>
			<Image
				source={require('../../assets/icons/home_icon_clicked.png')}
				style={{ width: 18, height: 19 }}
			/>
		    <Text style = {{ color: '#8D70FF', fontSize: 12 }}>Home</Text>
		  </Pressable>
		  <Pressable onPress={() => alert('Feature coming soon')} style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' }}>
			<Image
				source={require('../../assets/icons/rewards_icon.png')}
				style={{ width: 18, height: 19 }}
			/>
		    <Text style = {{ color: '#959BAA', fontSize: 12 }}>Rewards</Text>
		  </Pressable>
		  <Pressable onPress={() => alert('Feature coming soon')} style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' }}>
			<Image
				source={require('../../assets/icons/trophy_icon_large.png')}
				style={{ width: 18, height: 19 }}
			/>
		    <Text style = {{ color: '#959BAA', fontSize: 12 }}>Leaderboard</Text>
		  </Pressable>
		  <Pressable onPress={() => alert('Feature coming soon')} style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' }}>
			<Image
				source={require('../../assets/icons/profile_icon.png')}
				style={{ width: 18, height: 19 }}
			/>
		    <Text style = {{ color: '#959BAA', fontSize: 12 }}>Profile</Text>
		  </Pressable>
		</View>
	   );
	 };
	 
export default Toolbar;
