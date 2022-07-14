import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react'

export default function CitiesScreen() {
    return (
      <View style={styles.container}>
        <Text>Cities</Text>
      </View>
    )
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'brown',
      alignItems: 'center',
     padding: 30
    },
  });
  