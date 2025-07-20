import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
} from 'react-native';
import { Ionicons, Entypo, MaterialCommunityIcons, Feather } from '@expo/vector-icons';

export default function SettingsModal({ visible, onClose, onOpenCommunityModal }) {
  return (
    <Modal visible={visible} animationType="slide">
      <ScrollView contentContainerStyle={styles.container}>
        {/* Close Button */}
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Ionicons name="close" size={30} color="white" />
        </TouchableOpacity>

     
       
        {/* Sign-in prompt */}
        <View style={styles.signInBox}>
          <Text style={styles.signInTitle}>Get started with Innovara</Text>
            <TouchableOpacity onPress={onOpenCommunityModal}>
          <Text style={styles.signInLink}>Sign up or sign in →</Text>
            </TouchableOpacity>
        </View>

        {/* Configuration */}
        <Text style={styles.sectionLabel}>CONFIGURATION</Text>
        <SettingsItem
          icon={<Entypo name="browser" size={24} color="#fff" />}
          label="Open links in..."
          rightText="In-app browser"
        />

        {/* More Section */}
        <Text style={styles.sectionLabel}>MORE</Text>
        <SettingsItem
          icon={<MaterialCommunityIcons name="file-document-edit-outline" size={24} color="#fff" />}
          label="Changelog"
        />
        <SettingsItem
          icon={<Feather name="help-circle" size={24} color="#fff" />}
          label="Help"
        />
        <SettingsItem
          icon={<MaterialCommunityIcons name="rocket-launch" size={24} color="#fff" />}
          label="About Product Hunt"
        />
        <SettingsItem
          icon={<Ionicons name="sparkles-outline" size={24} color="#fff" />}
          label="Acknowledgements"
        />

        {/* Version */}
        <Text style={styles.versionText}>App version 5.22.18 (2277)</Text>
      </ScrollView>
    </Modal>
  );
}

function SettingsItem({ icon, label, rightText }) {
  return (
    <TouchableOpacity style={styles.itemRow}>
      <View style={styles.leftRow}>
        <View style={styles.iconBox}>{icon}</View>
        <Text style={styles.label}>{label}</Text>
      </View>
      {rightText && <Text style={styles.rightText}>{rightText}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6B1BB1',
    padding: 20,
    paddingTop: 100,
    flexGrow: 1,
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  title: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
  },
  logo: {
    width: 45,
    height: 45,
    borderRadius: 30,
  },
  signInBox: {
    backgroundColor: '#3B0D6D',
    borderRadius: 10,
    padding: 15,
    marginBottom: 30,
  },
  signInTitle: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 5,
  },
  signInLink: {
    color: '#4B8BFF',
    fontSize: 14,
  },
  sectionLabel: {
    color: '#888',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 15,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomColor: '#222',
    borderBottomWidth: 1,
  },
  leftRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBox: {
    width: 28,
    alignItems: 'center',
    marginRight: 10,
  },
  label: {
    color: '#fff',
    fontSize: 15,
  },
  rightText: {
    color: '#888',
    fontSize: 13,
  },
  versionText: {
    color: '#555',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 30,
  },
});
