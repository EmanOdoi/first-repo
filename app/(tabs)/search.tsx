import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import CommunityModal from '../components/CommunityModal'; // ✅ Adjust the path if needed

const popularTopics = [
  { title: 'Productivity', color: '#F99E1A' },
  { title: 'Tech', color: '#EB476C' },
  { title: 'Developer Tools', color: '#7B61FF' },
  { title: 'Marketing', color: '#4A90E2' },
  { title: 'Artificial Intelligence', color: '#2CD3D3' },
  { title: 'User Experience', color: '#70D66B' },
];

const timeTravel = [
  {
    label: '19 Jul',
    description: 'Top products from 19 Jul',
    color: '#EB476C',
  },
  {
    label: 'Last week',
    description: 'Top products from the last 7 days',
    color: '#F99E1A',
  },
  {
    label: 'Last month',
    description: 'Top products from the last 30 days',
    color: '#2CD3D3',
  },
  {
    label: 'Last year',
    description: 'Top products from the last 365 days',
    color: '#7B61FF',
  },
];

export default function SearchScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView style={styles.container}>
      {/* Person Icon + Search Input Row */}
      <View style={styles.topRow}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Ionicons name="person-circle-outline" size={36} color="#F99E1A" />
        </TouchableOpacity>

        <View style={styles.searchBox}>
          <TextInput
            placeholder="Search Product Hunt"
            placeholderTextColor="#999"
            style={styles.input}
          />
        </View>
      </View>

      {/* Popular Topics Section */}
      <View style={styles.section}>
        <View style={styles.rowBetween}>
          <Text style={styles.sectionTitle}>Popular topics</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.tagsWrap}>
          {popularTopics.map((topic, i) => (
            <TouchableOpacity
              key={i}
              style={[styles.tag, { backgroundColor: topic.color }]}
            >
              <Text style={styles.tagText}># {topic.title}</Text>
              <Entypo name="chevron-right" size={14} color="#fff" />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Time Travel Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Time travel</Text>
        {timeTravel.map((item, index) => (
          <TouchableOpacity key={index} style={styles.timeItem}>
            <View
              style={[styles.iconCircle, { backgroundColor: item.color }]}
            >
              <Ionicons name="refresh-outline" size={18} color="#fff" />
            </View>
            <View>
              <Text style={styles.timeLabel}>{item.label}</Text>
              <Text style={styles.timeDescription}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Community Modal */}
      <CommunityModal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6B1BB1',
    paddingHorizontal: 16,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 70,
    marginBottom: 20,
    gap: 12,
  },
  searchBox: {
    backgroundColor: '#1A1A1A',
    borderRadius: 10,
    paddingHorizontal: 12,
    flex: 1,
    height: 40,
    justifyContent: 'center',
  },
  input: {
    color: '#fff',
    fontSize: 16,
  },
  section: {
    marginBottom: 28,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  seeAll: {
    color: '#4B8BFF',
    fontSize: 13,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tagsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    color: '#fff',
    fontSize: 14,
    marginRight: 5,
  },
  timeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  timeLabel: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  timeDescription: {
    color: '#aaa',
    fontSize: 12,
  },
});
