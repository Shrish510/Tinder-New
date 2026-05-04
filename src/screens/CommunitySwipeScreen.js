import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { communityProfiles } from '../data/mockData';

const { height } = Dimensions.get('window');

const CommunitySwipeScreen = ({ route, navigation }) => {
  const { title } = route.params;
  const initialCards = communityProfiles[title] || communityProfiles['Serious Daters']; // fallback to Serious Daters
  const [cards, setCards] = useState(initialCards);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
    });
  }, [navigation, title]);

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
        <View style={styles.overlay}>
          <Text style={styles.nameAge}>{card.name}, {card.age}</Text>
          <View style={styles.locationRow}>
            <MaterialCommunityIcons name="map-marker" size={16} color="white" />
            <Text style={styles.distance}>{card.distance} km away</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
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
          cardVerticalMargin={20}
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
          <Text style={styles.noMoreText}>No more profiles in this community.</Text>
        </View>
      )}

      <View style={styles.bottomActions}>
        <TouchableOpacity style={styles.smallButton}><MaterialCommunityIcons name="rewind" size={24} color="#F5B748" /></TouchableOpacity>
        <TouchableOpacity style={styles.largeButton}><MaterialCommunityIcons name="close" size={32} color="#E5566D" /></TouchableOpacity>
        <TouchableOpacity style={styles.smallButton}><MaterialCommunityIcons name="star" size={24} color="#3AB4CC" /></TouchableOpacity>
        <TouchableOpacity style={styles.largeButton}><MaterialCommunityIcons name="heart" size={32} color="#4CCC93" /></TouchableOpacity>
        <TouchableOpacity style={styles.smallButton}><MaterialCommunityIcons name="lightning-bolt" size={24} color="#A65BF1" /></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
  swiperContainer: {
    flex: 1,
  },
  card: {
    height: height * 0.65,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#222',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    paddingTop: 60,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  nameAge: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  distance: {
    color: 'white',
    fontSize: 16,
    marginLeft: 5,
  },
  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noMoreText: {
    color: 'gray',
  },
  bottomActions: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 15,
    position: 'absolute',
    bottom: 10,
    width: '100%',
  },
  smallButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333',
  },
  largeButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333',
  }
});

export default CommunitySwipeScreen;