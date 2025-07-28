import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Platform,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { useRouter } from 'expo-router';
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
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            <StoriesSection />
          </ScrollView>
        )}
      </SafeAreaView>
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
  scrollContent: {
    paddingBottom: 30,
  },
});
