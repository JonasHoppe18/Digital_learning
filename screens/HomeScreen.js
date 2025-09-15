import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export default function HomeScreen() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Velkommen til Digital Learning!</Text>
      <Text style={styles.info}>
        Gå til "Kursusoversigt" for at se alle kurser og komme i gang med din læring.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  info: {
    fontSize: 15,
    textAlign: 'center',
    color: '#555',
    marginTop: 10,
  },
});
