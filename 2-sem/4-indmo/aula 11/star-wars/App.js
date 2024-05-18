import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import priTrilogia from './screens/priTrilogia';
import segTrilogia from './screens/segTrilogia';
import terTrilogia from './screens/terTrilogia';
import darthVaider from './screens/darthVaider';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#a52a2a"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: '#9381FF' }}
      >
        <Tab.Screen
          name="priTrilogia"
          component={priTrilogia}
          options={{
            tabBarLabel: 'Primeira Trilogia',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="death-star-variant" color={color} size={26} />
            ),
          }}
        />
       
        <Tab.Screen
          name="segTrilogia"
          component={segTrilogia}
          options={{
            tabBarLabel: 'Segunda Trilogia',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="death-star-variant" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="terTrilogia"
          component={terTrilogia}
          options={{
            tabBarLabel: 'Terceira Trilogia',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="death-star-variant" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="darthVaider"
          component={darthVaider}
          options={{
            tabBarLabel: 'Darth Vaider',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="death-star-variant" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
      
    </NavigationContainer>
  );
}