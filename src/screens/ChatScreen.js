import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ChatScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Chat</Text>
        <View style={styles.headerIcons}>
          <MaterialCommunityIcons name="shield-half-full" size={24} color="gray" style={styles.iconSpacing} />
          <Ionicons name="chatbubbles" size={24} color="gray" />
        </View>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="gray" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search 0 matches"
          placeholderTextColor="gray"
        />
      </View>

      <Text style={styles.sectionTitle}>New Matches</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.matchesScroll}>
        <View style={styles.matchPlaceholder} />
        <View style={styles.matchPlaceholder} />
        <View style={styles.matchPlaceholder} />
        <View style={styles.matchPlaceholder} />
      </ScrollView>

      <Text style={styles.sectionTitle}>Messages</Text>

      <TouchableOpacity style={styles.messageItem}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatarLogo}>
            <MaterialCommunityIcons name="fire" size={32} color="white" />
          </View>
          <View style={styles.notificationDot} />
        </View>
        <View style={styles.messageContent}>
          <View style={styles.messageHeader}>
            <Text style={styles.senderName}>Team Tinder</Text>
            <MaterialCommunityIcons name="check-decagram" size={16} color="#E5566D" style={styles.verifiedIcon} />
          </View>
          <Text style={styles.messagePreview} numberOfLines={1}>
            Enjoy all of Tinder's features an...
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.divider} />

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  headerTitle: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconSpacing: {
    marginRight: 15,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    paddingBottom: 10,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: 'white',
    fontSize: 16,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  matchesScroll: {
    marginBottom: 25,
  },
  matchPlaceholder: {
    width: 80,
    height: 110,
    backgroundColor: '#222',
    borderRadius: 8,
    marginRight: 10,
  },
  messageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 15,
  },
  avatarLogo: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#FF4565', // Tinder pink/red
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationDot: {
    position: 'absolute',
    right: 0,
    bottom: 5,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#E5566D',
    borderWidth: 2,
    borderColor: '#111111',
  },
  messageContent: {
    flex: 1,
  },
  messageHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  senderName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  verifiedIcon: {
    marginLeft: 5,
  },
  messagePreview: {
    color: 'gray',
    fontSize: 14,
  },
  divider: {
    height: 1,
    backgroundColor: '#333',
    marginLeft: 85, // align with text
  }
});

export default ChatScreen;