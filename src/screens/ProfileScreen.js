import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ProfileScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView style={[styles.container, { paddingTop: insets.top }]}>
      {/* Header Info */}
      <View style={styles.headerInfo}>
        <View style={styles.profilePicContainer}>
          <Image source={{ uri: 'https://i.pravatar.cc/150?img=68' }} style={styles.profilePic} />
        </View>
        <View style={styles.nameHeader}>
          <Text style={styles.nameText}>Bro</Text>
          <MaterialCommunityIcons name="alert-circle-outline" size={20} color="#E5566D" style={{marginLeft: 5}} />
        </View>
        <TouchableOpacity>
          <Ionicons name="settings-sharp" size={28} color="gray" style={styles.settingsIcon} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.editProfileBtn}>
        <MaterialCommunityIcons name="pencil" size={20} color="black" style={{marginRight: 5}} />
        <Text style={styles.editProfileText}>Edit profile</Text>
      </TouchableOpacity>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <View style={styles.progressBarBg}>
          <View style={styles.progressBarFill} />
        </View>
        <View style={styles.progressBadge}>
          <Text style={styles.progressBadgeText}>72%</Text>
        </View>
      </View>
      <Text style={styles.completeProfileText}>
        Complete your profile to be seen by more{'\n'}people!
      </Text>

      {/* Prompts */}
      <View style={styles.actionCard}>
        <View style={styles.actionIconContainer}>
          <Text style={styles.quoteIcon}>“</Text>
          <View style={styles.plusBadge}><Text style={styles.plusBadgeText}>+10%</Text></View>
        </View>
        <View style={styles.actionTextContainer}>
          <Text style={styles.actionTitle}>Add a prompt</Text>
          <Text style={styles.actionSubtitle}>Show off your personality to spark better conversations.</Text>
        </View>
        <View style={styles.dashedCircle} />
      </View>

      <View style={styles.actionCard}>
        <View style={styles.actionIconContainer}>
          <MaterialCommunityIcons name="check-decagram" size={32} color="#FF8CBE" />
          <View style={styles.plusBadge}><Text style={styles.plusBadgeText}>+8%</Text></View>
        </View>
        <View style={styles.actionTextContainer}>
          <Text style={styles.actionTitle}>Get verified</Text>
          <Text style={styles.actionSubtitle}>Verify your profile to build trust with others.</Text>
        </View>
        <View style={styles.dashedCircle} />
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActionsRow}>
        <TouchableOpacity style={styles.quickActionBox}>
          <View style={styles.plusIconTop}><MaterialCommunityIcons name="plus" size={16} color="gray" /></View>
          <MaterialCommunityIcons name="star" size={32} color="#3AB4CC" style={styles.quickActionIcon} />
          <Text style={styles.quickActionCount}>0 Super Likes</Text>
          <Text style={styles.quickActionLink}>GET MORE</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.quickActionBox}>
          <View style={styles.plusIconTop}><MaterialCommunityIcons name="plus" size={16} color="gray" /></View>
          <MaterialCommunityIcons name="lightning-bolt" size={32} color="#A65BF1" style={styles.quickActionIcon} />
          <Text style={styles.quickActionCount}>My Boosts</Text>
          <Text style={styles.quickActionLinkPurple}>GET MORE</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.quickActionBox}>
          <View style={styles.plusIconTop}><MaterialCommunityIcons name="plus" size={16} color="gray" /></View>
          <MaterialCommunityIcons name="fire" size={32} color="#FF4565" style={styles.quickActionIcon} />
          <Text style={styles.quickActionCountWhite}>Subscriptions</Text>
        </TouchableOpacity>
      </View>

      {/* Gold Banner */}
      <View style={styles.goldBanner}>
        <View style={styles.goldHeader}>
          <View style={styles.goldLogoRow}>
            <MaterialCommunityIcons name="fire" size={24} color="#F5B748" />
            <Text style={styles.tinderLogoText}>tinder</Text>
            <View style={styles.goldBadge}><Text style={styles.goldBadgeText}>GOLD</Text></View>
          </View>
          <TouchableOpacity style={styles.upgradeBtn}>
            <Text style={styles.upgradeBtnText}>UPGRADE</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderText}>What's Included</Text>
          <Text style={styles.tableHeaderLabel}>Free</Text>
          <Text style={styles.tableHeaderLabel}>Gold</Text>
        </View>

        <View style={styles.tableRow}>
          <Text style={styles.tableRowText}>See Who Likes You</Text>
          <MaterialCommunityIcons name="lock" size={16} color="white" style={styles.tableIconFree} />
          <MaterialCommunityIcons name="check" size={20} color="white" style={styles.tableIconGold} />
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableRowText}>Top Picks</Text>
          <MaterialCommunityIcons name="lock" size={16} color="white" style={styles.tableIconFree} />
          <MaterialCommunityIcons name="check" size={20} color="white" style={styles.tableIconGold} />
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.tableRowText}>Free Super Likes</Text>
          <MaterialCommunityIcons name="lock" size={16} color="white" style={styles.tableIconFree} />
          <MaterialCommunityIcons name="check" size={20} color="white" style={styles.tableIconGold} />
        </View>

      </View>
      <View style={{height: 50}} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    paddingHorizontal: 15,
  },
  headerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 20,
  },
  profilePicContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: 'hidden',
  },
  profilePic: {
    width: '100%',
    height: '100%',
  },
  nameHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: -60, // offset for absolute centering visually
  },
  nameText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  settingsIcon: {
    marginLeft: 'auto',
  },
  editProfileBtn: {
    alignSelf: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  editProfileText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  progressContainer: {
    alignItems: 'center',
    marginBottom: 10,
    position: 'relative',
  },
  progressBarBg: {
    width: '100%',
    height: 4,
    backgroundColor: '#333',
    borderRadius: 2,
    marginTop: 10,
  },
  progressBarFill: {
    width: '72%',
    height: '100%',
    backgroundColor: '#E5566D',
    borderRadius: 2,
  },
  progressBadge: {
    position: 'absolute',
    top: 0,
    right: '20%', // approx 72%
    backgroundColor: '#E5566D',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
  },
  progressBadgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  completeProfileText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 20,
  },
  actionCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  actionIconContainer: {
    width: 50,
    alignItems: 'center',
    position: 'relative',
  },
  quoteIcon: {
    color: '#FF8CBE',
    fontSize: 40,
    lineHeight: 40,
    fontWeight: 'bold',
    fontFamily: 'serif',
  },
  plusBadge: {
    position: 'absolute',
    bottom: -5,
    backgroundColor: 'white',
    paddingHorizontal: 4,
    borderRadius: 4,
  },
  plusBadgeText: {
    color: '#E5566D',
    fontSize: 10,
    fontWeight: 'bold',
  },
  actionTextContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  actionTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  actionSubtitle: {
    color: 'gray',
    fontSize: 14,
  },
  dashedCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'gray',
    borderStyle: 'dashed',
  },
  quickActionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  quickActionBox: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    marginHorizontal: 4,
    position: 'relative',
  },
  plusIconTop: {
    position: 'absolute',
    top: 5,
    right: 5,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quickActionIcon: {
    marginBottom: 10,
  },
  quickActionCount: {
    color: '#3AB4CC',
    fontSize: 12,
    marginBottom: 5,
  },
  quickActionCountWhite: {
    color: 'white',
    fontSize: 12,
    marginBottom: 5,
  },
  quickActionLink: {
    color: '#3AB4CC',
    fontSize: 12,
    fontWeight: 'bold',
  },
  quickActionLinkPurple: {
    color: '#A65BF1',
    fontSize: 12,
    fontWeight: 'bold',
  },
  goldBanner: {
    backgroundColor: '#1A1811', // Dark gold/brown tone
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#4A3B18',
  },
  goldHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  goldLogoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tinderLogoText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
  goldBadge: {
    backgroundColor: '#F5B748',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  goldBadgeText: {
    color: 'black',
    fontSize: 10,
    fontWeight: 'bold',
  },
  upgradeBtn: {
    backgroundColor: '#F5B748',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  upgradeBtnText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 14,
  },
  tableHeader: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  tableHeaderText: {
    flex: 2,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  tableHeaderLabel: {
    flex: 1,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  tableRowText: {
    flex: 2,
    color: 'white',
    fontSize: 14,
  },
  tableIconFree: {
    flex: 1,
    textAlign: 'center',
  },
  tableIconGold: {
    flex: 1,
    textAlign: 'center',
  }
});

export default ProfileScreen;