import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CoursesOverviewScreen from '../screens/CoursesOverviewScreen';
import CourseScreen from '../screens/CourseScreen';

const Stack = createNativeStackNavigator();

export default function CoursesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="CoursesOverview" 
        component={CoursesOverviewScreen} 
        options={{ title: 'Kursusoversigt' }}
      />
      <Stack.Screen 
        name="Course" 
        component={CourseScreen} 
        options={{ title: 'Kursusdetaljer' }}
      />
    </Stack.Navigator>
  );
}