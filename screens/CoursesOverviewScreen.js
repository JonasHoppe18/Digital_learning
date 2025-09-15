import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import courses from '../data/courses';
import { globalStyles } from '../styles/globalStyles';

export default function CoursesOverviewScreen({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Kursusoversigt</Text>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={globalStyles.card}
            onPress={() => navigation.navigate('Course', { course: item })}
          >
            <Text style={globalStyles.cardTitle}>{item.title}</Text>
            <Text>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}