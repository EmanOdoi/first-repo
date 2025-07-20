import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { TabHeader } from '../components/TabHeader';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const featuredData = [
  {
    id: '1',
    name: 'Long',
    description: 'Invest in startups before VCs get in',
    votes: 251,
  },
  {
    id: '2',
    name: 'Fieldy',
    description: 'Wearable AI note taker for in-person meetings',
    votes: 235,
  },
  {
    id: '3',
    name: 'Mistral Code',
    description: 'Enterprise AI coding with full control & security',
    votes: 180,
  },
  {
    id: '4',
    name: 'Bugdrop',
    description: 'Users won’t report bugs... unless it’s stupid simple',
    votes: 156,
  },
  {
    id: '5',
    name: 'skillsync',
    description: 'Discover hidden talent in your codebase',
    votes: 149,
  },
  {
    id: '6',
    name: 'Intercom',
    description: 'Startups get 90% off Intercom + 1 year of Fin AI Agent free',
    votes: 306,
    promoted: true,
  },
];

const forYouData = [
  {
    id: '101',
    name: 'PromptHub',
    description: 'Top AI prompts ranked daily',
    votes: 142,
    promoted: false,
  },
  {
    id: '102',
    name: 'Decktopus AI',
    description: 'Create presentations instantly with AI',
    votes: 198,
    promoted: true,
  },
  {
    id: '103',
    name: 'Dewey',
    description: 'Turn notes into spaced repetition flashcards',
    votes: 123,
    promoted: false,
  },
];

export default function HomeScreen() {
  const [content, setContent] = useState('Featured');
  const router = useRouter();

  const handleProductPress = (item) => {
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

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleProductPress(item)} style={styles.itemCard}>
      <View style={styles.logoPlaceholder}>
        <Text style={{ color: '#fff', fontWeight: 'bold' }}>{item.name[0]}</Text>
      </View>
      <View style={styles.contentBox}>
        <Text style={styles.title}>
          {item.name}
          {item.promoted && <Text style={styles.promoted}>  Promoted</Text>}
        </Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <TouchableOpacity onPress={() => handleProductPress(item)} style={styles.voteBox}>
        <Ionicons name="caret-up-outline" size={18} color="#FFCB3C" />
        <Text style={styles.voteText}>{item.votes}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#6B1BB1' }}>
      <TabHeader onTabChange={(tab) => setContent(tab)} />

      {content === 'Featured' ? (
        <>
          <Text style={styles.dateLabel}>Now Jul 17</Text>
          <FlatList
            data={featuredData}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={{ paddingBottom: 100 }}
            showsVerticalScrollIndicator={false}
          />
        </>
      ) : (
        <>
          <Text style={styles.dateLabel}>Recommended For You</Text>
          <FlatList
            data={forYouData}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={{ paddingBottom: 100 }}
            showsVerticalScrollIndicator={false}
          />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  itemCard: {
    flexDirection: 'row',
    backgroundColor: '#3B0D6D',
    borderRadius: 12,
    padding: 14,
    marginHorizontal: 16,
    marginBottom: 12,
    alignItems: 'center',
  },
  logoPlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25, // circular
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  contentBox: {
    flex: 1,
  },
  title: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  promoted: {
    fontSize: 12,
    color: '#999',
  },
  description: {
    color: '#aaa',
    fontSize: 13,
    marginTop: 4,
  },
  voteBox: {
    alignItems: 'center',
    marginLeft: 10,
  },
  voteText: {
    color: '#ccc',
    fontSize: 13,
  },
  dateLabel: {
    color: '#bbb',
    fontSize: 14,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 4,
  },
});
