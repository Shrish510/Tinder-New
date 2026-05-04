import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { mainSwipeProfiles } from '../data/mockData';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('window');

const SwipeScreen = () => {
  const [cards, setCards] = useState(mainSwipeProfiles);
  const insets = useSafeAreaInsets();

  const onSwipedLeft = (index) => {
    console.log('passed on', cards[index].name);
  };

  const onSwipedRight = (index) => {
    console.log('liked', cards[index].name);
  };

  const renderCard = (card) => {
    if (!card) return null;
    return (
      <View style={styles.card}>
        <Image source={{ uri: card.image }} style={styles.image} />

        {/* Adjusted bottom overlay for user info and action buttons */}
        <View style={styles.overlay}>
          <View style={styles.userInfoContainer}>
            <View style={styles.nearbyTag}>
              <MaterialCommunityIcons name="map-marker-outline" size={14} color="white" />
              <Text style={styles.nearbyText}>Nearby</Text>
            </View>
            <View style={styles.nameRow}>
              <Text style={styles.nameAge}>{card.name} {card.age}</Text>
              <MaterialCommunityIcons name="arrow-up-circle" size={24} color="white" style={styles.upArrow} />
            </View>
            <View style={styles.locationRow}>
              <MaterialCommunityIcons name="map-marker" size={16} color="white" />
              <Text style={styles.distance}>{card.distance} km away</Text>
            </View>
          </View>

          {/* Action Buttons specific to the card bottom */}
          <View style={styles.cardBottomActions}>
            <TouchableOpacity style={styles.actionButtonCross}>
              <MaterialCommunityIcons name="close" size={36} color="#E5566D" />
            </TouchableOpacity>

            <View style={styles.messageInputContainer}>
              <Text style={styles.messageInputText}>Send message...</Text>
            </View>

            <TouchableOpacity style={styles.actionButtonStar}>
              <MaterialCommunityIcons name="star" size={24} color="#3AB4CC" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButtonHeart}>
              <MaterialCommunityIcons name="heart" size={36} color="#4CCC93" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Top Navigation Bar Overlay */}
      <View style={[styles.topNavOverlay, { paddingTop: insets.top + 10 }]}>
        <TouchableOpacity style={styles.filterButton}>
          <MaterialCommunityIcons name="tune" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.topNavTabs}>
          <Text style={[styles.topNavTab, styles.topNavTabActive]}>For You</Text>
          <Text style={styles.topNavTab}>Double Date</Text>
          <Text style={styles.topNavTab}>Astrology</Text>
        </View>
        <TouchableOpacity style={styles.lightningButton}>
          <MaterialCommunityIcons name="lightning-bolt" size={20} color="#A65BF1" />
        </TouchableOpacity>
      </View>

      {cards.length > 0 ? (
        <Swiper
          cards={cards}
          renderCard={renderCard}
          onSwipedLeft={onSwipedLeft}
          onSwipedRight={onSwipedRight}
          onSwipedAll={() => console.log('All cards swiped')}
          cardIndex={0}
          backgroundColor={'transparent'}
          stackSize={3}
          cardVerticalMargin={0}
          cardHorizontalMargin={0}
          containerStyle={styles.swiperContainer}
          overlayLabels={{
            left: {
              title: 'NOPE',
              style: {
                label: { backgroundColor: 'transparent', borderColor: '#E5566D', color: '#E5566D', borderWidth: 4, fontSize: 32 },
                wrapper: { flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-start', marginTop: 30, marginLeft: -30 }
              }
            },
            right: {
              title: 'LIKE',
              style: {
                label: { backgroundColor: 'transparent', borderColor: '#4CCC93', color: '#4CCC93', borderWidth: 4, fontSize: 32 },
                wrapper: { flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'flex-start', marginTop: 30, marginLeft: 30 }
              }
            }
          }}
          animateOverlayLabelsOpacity
          animateCardOpacity
          swipeBackCard
        />
      ) : (
        <View style={styles.noMoreCards}>
          <Text style={styles.noMoreText}>No more profiles in your area.</Text>
        </View>
      )}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
  topNavOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingBottom: 15,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  filterButton: {
    padding: 5,
  },
  topNavTabs: {
    flexDirection: 'row',
    gap: 15,
  },
  topNavTab: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 16,
    fontWeight: '600',
  },
  topNavTabActive: {
    color: 'white',
  },
  lightningButton: {
    backgroundColor: '#2A2A2A',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  swiperContainer: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  card: {
    height: height,
    width: width,
    overflow: 'hidden',
    backgroundColor: '#222',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 80,
    paddingBottom: 90, // Avoid overlap with bottom tab bar
    paddingHorizontal: 15,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  userInfoContainer: {
    marginBottom: 20,
  },
  nearbyTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E9D8B',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 8,
  },
  nearbyText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameAge: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
  upArrow: {
    marginLeft: 10,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  distance: {
    color: 'white',
    fontSize: 14,
    marginLeft: 4,
  },
  cardBottomActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  actionButtonCross: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#2A2A2A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButtonHeart: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#2A2A2A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButtonStar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#2A2A2A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  messageInputContainer: {
    flex: 1,
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 25,
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },
  messageInputText: {
    color: 'white',
    fontSize: 16,
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noMoreText: {
    color: 'gray',
  },
});

export default SwipeScreen;