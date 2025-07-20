import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CommunityModal from './CommunityModal';
import SettingsModal from './SettingsModal';

export const TabHeader = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState('Featured');
  const [modalVisible, setModalVisible] = useState(false); // For CommunityModal
  const [showSettings, setShowSettings] = useState(false); // For SettingsModal

  const handleTabPress = (tab) => {
    setActiveTab(tab);
    if (onTabChange) {
      onTabChange(tab);
    }
  };

  return (
    <View style={styles.container}>
      {/* Top Icons */}
      <View style={styles.iconsRow}>
        <TouchableOpacity style={styles.icon} onPress={() => setModalVisible(true)}>
          <Ionicons name="person-circle-outline" size={36} color="#F99E1A" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowSettings(true)} style={styles.icon}>
          <Ionicons name="settings-outline" size={30} color="#F99E1A" />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabsRow}>
        {['Featured', 'For You'].map((tab) => (
          <View key={tab} style={styles.tabContainer}>
            <TouchableOpacity
              style={styles.tabButton}
              onPress={() => handleTabPress(tab)}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab && styles.activeTabText,
                ]}
              >
                {tab}
              </Text>
              {activeTab === tab && <View style={styles.activeIndicator} />}
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Modals */}
      <CommunityModal visible={modalVisible} onClose={() => setModalVisible(false)} />
      <SettingsModal
        visible={showSettings}
        onClose={() => setShowSettings(false)}
        onOpenCommunityModal={() => {
          setShowSettings(false);
          setModalVisible(true);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#542F85',
    paddingBottom: 5,
  },
  iconsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 7,
  },
  icon: {
    padding: 5,
  },
  tabsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabContainer: {
    flex: 1,
    alignItems: 'center',
  },
  tabButton: {
    alignItems: 'center',
  },
  tabText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#888',
    paddingBottom: 5,
  },
  activeTabText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  activeIndicator: {
    width: 80,
    height: 3,
    backgroundColor: '#C62368',
    borderRadius: 2,
  },
});
