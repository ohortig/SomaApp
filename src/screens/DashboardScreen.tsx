import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList } from 'react-native';
import { getToken } from '../storage';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from '../stylesheets/dashboardScreen.styles';
import LoggedInHeader from '../components/LoggedInHeader';

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
                    <ActivityIndicator size="large" color="#120845" />
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
               <LoggedInHeader />
               <Text style={[styles.headerText, { marginTop: 20 }]}>Welcome back, {dashboardData.user.name}!</Text>
               <View style={styles.quickFactsContainer}>
                    <View style={styles.quickFactBubble}>
                         <Text style={styles.quickFactText}>Loyalty Points</Text>
                    </View>
                    <View style={styles.quickFactBubble}>
                         <Text style={styles.quickFactText}>Cycle</Text>
                    </View>
                    <View style={styles.quickFactBubble}>
                         <Text style={styles.quickFactText}>Your Reward</Text>
                    </View>
               </View>
               <Text>User ID: {dashboardData.userId}</Text>
               <Text>User Name: {dashboardData.user.name}</Text>
               <Text>Restaurant Name: {dashboardData.restaurant.name}</Text>
               <Text>Points: {dashboardData.stats.points}</Text>

               <Text style={styles.headerText}>Leaderboard:</Text>
               <FlatList
                    data={dashboardData.leaderboard}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                         <Text>{item.name}: {item.total} points {item.you ? '(You)' : ''}</Text>
                    )}
               />
          </SafeAreaView>
     );
};

export default DashboardScreen;