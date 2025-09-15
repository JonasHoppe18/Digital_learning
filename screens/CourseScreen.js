import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export default function CourseScreen({ route, navigation }) {
  const { course } = route.params;

  return (
    <View style={globalStyles.container}>
      <View style={styles.headerRow}>
      </View>
      <Text style={globalStyles.title}>{course.title}</Text>
      <View style={styles.card}>
        <Text style={styles.description}>{course.description}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => navigation.navigate('Quiz', { courseId: course.id })}
        >
          <Text style={styles.startButtonText}>Start Kursus</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  backButton: {
    padding: 6,
  },
  backButtonText: {
    fontSize: 13,
    color: '#007AFF',
  },
  card: {
    ...globalStyles.card,
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 40,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  startButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
