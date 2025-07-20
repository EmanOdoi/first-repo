import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, Modal } from 'react-native';
import { Entypo, AntDesign } from '@expo/vector-icons';

export default function JoinCommunityModal({ visible, onClose }) {
  return (
    <Modal visible={visible} animationType="slide">
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={{ fontSize: 24, color: '#fff' }}>✕</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Join the Community</Text>
        <Text style={styles.subtitle}>
          Join our community of friendly folks discovering and sharing the latest products in tech.
        </Text>

        <View style={styles.buttonContainer}>
          <SocialButton icon={<Entypo name="twitter" size={24} color="#1DA1F2" />} text="Connect with Twitter" />
          <SocialButton icon={<Entypo name="facebook" size={24} color="#1877F2" />} text="Connect with Facebook" />
          <SocialButton icon={<AntDesign name="google" size={24} color="#DB4437" />} text="Connect with Google" />
          <SocialButton icon={<AntDesign name="apple1" size={24} color="white" />} text="Connect with Apple" />
          <SocialButton icon={<Entypo name="linkedin" size={24} color="#0077B5" />} text="Connect with LinkedIn" />
        </View>

        <Text style={styles.footerText}>
          Continue if you agree to our <Text style={styles.link}>terms</Text> and{' '}
          <Text style={styles.link}>privacy policy</Text>.
        </Text>
      </ScrollView>
    </Modal>
  );
}

const SocialButton = ({ icon, text }) => (
  <TouchableOpacity style={styles.socialButton}>
    <View style={styles.icon}>{icon}</View>
    <Text style={styles.socialText}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#6B1BB1',
    alignItems: 'center',
    padding: 20,
  },
  closeButton: {
    alignSelf: 'absolute',
    marginTop: 40,
    marginBottom: 10,
    marginRight: 20,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginBottom: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  subtitle: {
    color: '#aaa',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '100%',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#999',
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 12,
  },
  icon: {
    marginRight: 12,
  },
  socialText: {
    color: '#fff',
    fontSize: 16,
  },
  footerText: {
    color: '#aaa',
    fontSize: 12,
    marginTop: 30,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  link: {
    color: '#E65A50',
  },
});
