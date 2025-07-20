// app/(tabs)/ProductDetail.tsx

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function ProductDetail() {
  const { name, description, votes, promoted } = useLocalSearchParams();
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      <View style={styles.header}>
        <View style={styles.logoPlaceholder} />
        <Text style={styles.name}>{name}</Text>
        {promoted === 'true' && <Text style={styles.promoted}>Promoted</Text>}
      </View>

      <Text style={styles.description}>{description}</Text>

      <View style={styles.voteContainer}>
        <Ionicons name="caret-up-outline" size={28} color="#fff" />
        <Text style={styles.votes}>{votes} votes</Text>
      </View>

      <Text style={styles.more}>More product info will be loaded here in future.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0C',
    padding: 20,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backText: {
    color: '#fff',
    marginLeft: 6,
    fontSize: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#444',
    marginBottom: 12,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: '#fff',
  },
  promoted: {
    color: '#E65A50',
    fontSize: 14,
    marginTop: 4,
  },
  description: {
    color: '#ccc',
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 20,
  },
  voteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    padding: 12,
    borderRadius: 8,
    justifyContent: 'center',
    marginBottom: 20,
  },
  votes: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 8,
  },
  more: {
    color: '#999',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 40,
  },
});
