// app/CommunityScreen.tsx

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Platform,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import CommunityTabHeader from '../components/CommunityTabHeader';
import DiscussionCard from '../components/DiscussionCard';
import StoriesSection from '../components/StoriesSection';

export default function CommunityScreen() {
  const [selectedTab, setSelectedTab] = useState<'Discussions' | 'Stories'>('Discussions');
  const router = useRouter();

  const handleProductPress = (item: any) => {
    router.push({
      pathname: '/ProductDetail',
      params: {
        name: item.name,
        description: item.description,
        votes: item.votes.toString(),
        promoted: item.promoted ? 'true' : 'false',
      },
    });
  };

  const handleCreateProduct = () => {
    router.push('/CreateProduct'); // ✅ Navigate to CreateProduct screen
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#542F85" translucent />

      {/* Header */}
      <View style={styles.headerWrapper}>
        <CommunityTabHeader onTabChange={setSelectedTab} />
      </View>

      {/* Content */}
      <SafeAreaView style={{ flex: 1 }}>
        {selectedTab === 'Discussions' ? (
          <DiscussionCard />
        ) : (
          <StoriesSection />
        )}
      </SafeAreaView>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab} onPress={handleCreateProduct}>
        <Ionicons name="add" size={28} color="#fff" style={{ fontWeight: 'bold' }} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6B1BB1',
  },
  headerWrapper: {
    backgroundColor: '#542F85',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight || 25 : 10,
    paddingBottom: 10,
    paddingHorizontal: 16,
    zIndex: 10,
  },
  fab: {
    position: 'absolute',
    bottom: 100, // Higher above nav bar
    right: 20,
    backgroundColor: '#E65A50',
    width: 44, // Smaller circle
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
});
