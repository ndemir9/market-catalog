import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Home, Favori, SettingsScreen} from '../screens';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={{
        headerTitleAlign: 'center',
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <FontAwesome name="home" size={24} color="#000" />,
        }}
      />
      <Tab.Screen
        name="Favori"
        component={Favori}
        options={{
          tabBarIcon: () => <MaterialIcons name="favorite" size={24} color="#000" />,
        }}
      />
      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          tabBarIcon: () => <MaterialIcons name="settings" size={24} color="#000" />,
        }}
      />
    </Tab.Navigator>
  );
}
