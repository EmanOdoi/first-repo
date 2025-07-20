import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function ActivityScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Activity</Text>

      {/* Empty State Icon */}
      <Ionicons name="flash-outline" size={67} color="#888" style={styles.icon} />

      {/* Text */}
      <Text style={styles.title}>My activity</Text>
      <Text style={styles.subtitle}>
        When you have new upvotes, comments, followers, and mentions they will appear here.
      </Text>

      {/* Login Button */}
      <TouchableOpacity onPress={() => router.push('/login')}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6B1BB1',
    alignItems: 'center',
    paddingTop: 100,
    paddingHorizontal: 24,
  },
  header: {
    textAlign: 'center',
    top: 1,
    left: 2,
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  icon: {
    marginBottom: 200,
    top: 150,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#aaa',
    marginBottom: 20,
  },
  loginText: {
    fontSize: 14,
    color: '#4B8BFF',
    fontWeight: '500',
  },
});
