import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#F99E1A',
        tabBarInactiveTintColor: '#ffffff',
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          borderTopWidth: 0,
          backgroundColor: '#542F85',
          height: 75,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={28} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="search" size={28} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          title: 'Community',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="people" size={28} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="activity"
        options={{
          title: 'Activity',
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="notifications" size={28} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}