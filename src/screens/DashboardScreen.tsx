import React, { useEffect, useState } from 'react';
import { View, Image, Text, ActivityIndicator, FlatList, ScrollView } from 'react-native';
import { getToken } from '../storage';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from '../stylesheets/dashboardScreen.styles';
import LoggedInHeader from '../components/LoggedInHeader';
import QuickFacts from '../components/QuickFacts';
import GoalWidget from '../components/GoalWidget';
import WeeklyMissionsWidget from '../components/WeeklyMissionsWidget';
import Toolbar from '../components/Toolbar';

const DashboardScreen = () => {
     const [dashboardData, setDashboardData] = useState<any>(null);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState<string | null>(null);

     useEffect(() => {
          const fetchDashboardData = async () => {
               try {
                    const token = await getToken();
                    const response = await fetch('https://soma.bknd.run/api/custom/dashboard', {
                         method: 'GET',
                         headers: {
                              'Authorization': `Bearer ${token}`,
                              'Content-Type': 'application/json',
                         },
                    });
                    console.log('Attempting to retrieve dashboard data')
                    if (response.ok) {
                         const data = await response.json();
                         setDashboardData(data);
                         console.log('Dashboard data retrieved successfully', data)
                    } else {
                         const errorData = await response.json();
                         setError(errorData.message || 'Failed to fetch dashboard data.');
                    }
               } catch (error) {
                    setError('An error occurred while fetching dashboard data.');
               } finally {
                    setLoading(false);
               }
          };
          fetchDashboardData();
     }, []);
     if (loading) {
          return (
               <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size='small' color='#120845' />
               </View>
          );
     }
     if (error) {
          return (
               <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={[styles.bodyText, { color: 'red', marginTop: 10 }]}>{error}</Text>
               </View>
          );
     }

     return (
          <SafeAreaView style={styles.mainContainer}>
               <ScrollView>
                    <LoggedInHeader />
                    <Text style={[styles.headerText, { marginTop: 20 }]}>Welcome back, {dashboardData.user.name}!</Text>
                    <QuickFacts dashboardData={dashboardData}/>
                    <GoalWidget dashboardData={dashboardData}/>
                    <WeeklyMissionsWidget dashboardData={dashboardData}/>
                    <Text style={styles.bodyTitleText}>Monthly Leaderboard</Text>
                    <FlatList
                         data={dashboardData.leaderboard}
                         keyExtractor={(item) => item.id.toString()}
                         renderItem={({ item }) => (
                              <Text>{item.name}: {item.total} points {item.you ? '(You)' : ''}</Text>
                         )}
                    />
               </ScrollView>
               <Toolbar dashboardData={dashboardData}/>
          </SafeAreaView>
     );
};

export default DashboardScreen;