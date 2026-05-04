import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

const ExploreScreen = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const openCommunity = (title) => {
    navigation.navigate('CommunitySwipe', { title });
  };

  const renderCommunityCard = (title, subtitle, imageUri, count, isLarge) => {
    return (
      <TouchableOpacity
        style={[styles.cardContainer, isLarge ? styles.largeCard : styles.smallCard]}
        onPress={() => openCommunity(title)}
      >
        <ImageBackground
          source={{ uri: imageUri }}
          style={styles.cardImage}
          imageStyle={{ borderRadius: 12, opacity: 0.8 }}
        >
          <View style={styles.badge}>
            <MaterialCommunityIcons name="account" size={12} color="white" />
            <Text style={styles.badgeText}>{count}</Text>
          </View>
          <View style={styles.cardOverlay}>
            <Text style={styles.cardTitle}>{title}</Text>
            {subtitle && <Text style={styles.cardSubtitle}>{subtitle}</Text>}
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.headerTitle}>Explore</Text>

      {renderCommunityCard(
        "Serious Daters",
        null,
        "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80",
        "1K",
        true
      )}

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Goal-driven dating</Text>
        <Text style={styles.sectionSubtitle}>Find people with similar relationship goals</Text>
      </View>

      <View style={styles.gridContainer}>
        {renderCommunityCard(
          "Long-term partner",
          null,
          "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&q=80",
          "1K",
          false
        )}
        {renderCommunityCard(
          "Free To-night",
          null,
          "https://images.unsplash.com/photo-1543807535-eceef0bc6599?w=400&q=80",
          "556",
          false
        )}
        {renderCommunityCard(
          "Looking for friends",
          null,
          "https://images.unsplash.com/photo-1529156069898-49953eb1b5ea?w=400&q=80",
          "222",
          false
        )}
        {renderCommunityCard(
          "Casual dating",
          null,
          "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&q=80",
          "668",
          false
        )}
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
  headerTitle: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 10,
  },
  cardContainer: {
    marginBottom: 15,
    borderRadius: 12,
    overflow: 'hidden',
  },
  largeCard: {
    width: '100%',
    height: 250,
  },
  smallCard: {
    width: (width - 45) / 2, // 2 columns, padding 15*2 edges + 15 middle gap
    height: 220,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    backgroundColor: '#333', // fallback color
  },
  badge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0,0,0,0.6)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'white',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 2,
  },
  cardOverlay: {
    padding: 15,
    paddingTop: 40,
    backgroundColor: 'rgba(0,0,0,0.4)', // simulate gradient
  },
  cardTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    color: 'white',
    fontSize: 14,
    marginTop: 5,
  },
  sectionHeader: {
    marginTop: 10,
    marginBottom: 15,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionSubtitle: {
    color: 'gray',
    fontSize: 14,
    marginTop: 4,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  }
});

export default ExploreScreen;