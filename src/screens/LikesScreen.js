import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const LikesScreen = () => {
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState('likes'); // 'likes' or 'topPicks'

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.headerTitle}>Likes</Text>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'likes' && styles.activeTab]}
          onPress={() => setActiveTab('likes')}
        >
          <Text style={[styles.tabText, activeTab === 'likes' && styles.activeTabText]}>0 Likes</Text>
        </TouchableOpacity>

        <View style={styles.tabDivider} />

        <TouchableOpacity
          style={[styles.tab, activeTab === 'topPicks' && styles.activeTab]}
          onPress={() => setActiveTab('topPicks')}
        >
          <Text style={[styles.tabText, activeTab === 'topPicks' && styles.activeTabText]}>Top Picks</Text>
          <View style={styles.notificationDot} />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.upgradeText}>
          Upgrade to Gold to see people who{'\n'}have already liked you.
        </Text>

        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="speedometer" size={40} color="#F5B748" style={styles.speedIcon} />
          <MaterialCommunityIcons name="heart" size={60} color="#F5B748" style={styles.heartIcon} />
        </View>

        <Text style={styles.seePeopleText}>
          See people who liked you with Tinder{'\n'}Gold™
        </Text>
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>See who likes you</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    paddingHorizontal: 15,
  },
  headerTitle: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 10,
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#E5566D',
  },
  tabText: {
    color: 'gray',
    fontSize: 16,
    fontWeight: '600',
  },
  activeTabText: {
    color: 'white',
  },
  tabDivider: {
    width: 1,
    backgroundColor: '#333',
    height: 20,
    alignSelf: 'center',
  },
  notificationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E5566D',
    marginLeft: 5,
    marginTop: -10,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 40,
  },
  upgradeText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 40,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  speedIcon: {
    marginRight: -10,
    marginTop: -10,
  },
  heartIcon: {
    zIndex: 1,
  },
  seePeopleText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
  bottomContainer: {
    paddingVertical: 20,
    paddingBottom: 30,
  },
  button: {
    backgroundColor: '#F5B748',
    borderRadius: 30,
    paddingVertical: 18,
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default LikesScreen;