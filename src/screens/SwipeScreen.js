import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
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
        <LinearGradient colors={['transparent', 'rgba(0,0,0,0.8)', 'rgba(0,0,0,1)']} style={styles.overlay}>
          <View style={styles.userInfoContainer}>
            <View style={styles.activeTag}>

              <Text style={styles.activeText}>Active</Text>
            </View>
            <View style={styles.nameRow}>
              <View style={{flexDirection: "row", alignItems: "center"}}>
                <Text style={styles.nameAge}>{card.name} {card.age}</Text>
                <MaterialCommunityIcons name="check-decagram" size={24} color="#1D9BF0" style={{marginLeft: 8}} />
              </View>
              <MaterialCommunityIcons name="arrow-up-circle" size={28} color="white" style={styles.upArrow} />
            </View>
            <View style={styles.locationRow}>
              <MaterialCommunityIcons name="map-marker" size={16} color="white" />
              <Text style={styles.distance}>{card.distance} km away</Text>
            </View>
          </View>


          {/* Action Buttons specific to the card bottom */}
          <View style={styles.cardBottomActions}>
            <TouchableOpacity style={styles.actionButtonSmall}>
              <MaterialCommunityIcons name="backup-restore" size={24} color="#777" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButtonLarge}>
              <MaterialCommunityIcons name="close" size={36} color="#E5566D" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButtonSmall}>
              <MaterialCommunityIcons name="star" size={24} color="#3AB4CC" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButtonLarge}>
              <MaterialCommunityIcons name="heart" size={36} color="#4CCC93" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButtonSmall}>
              <MaterialCommunityIcons name="send" size={24} color="#1D9BF0" style={{transform: [{rotate: '-45deg'}], marginLeft: 4, marginBottom: 4}} />
            </TouchableOpacity>
          </View>
</LinearGradient>
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
    paddingTop: 120,
    paddingBottom: 90,
    paddingHorizontal: 15,
  },
  userInfoContainer: {
    marginBottom: 20,
  },
  activeTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 8,
  },
  activeText: {
    color: '#0E855D',
    fontSize: 14,
    fontWeight: 'bold',
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nameAge: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
  upArrow: {
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
  actionButtonLarge: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#2A2A2A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButtonSmall: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#2A2A2A',
    justifyContent: 'center',
    alignItems: 'center',
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