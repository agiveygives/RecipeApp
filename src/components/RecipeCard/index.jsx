import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Rating from '../Rating';
import styles from './styles';


const RecipeCard = ({ title, image, author, rating, time, style, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <View style={styles.row}>
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={1}>{title}</Text>
          <Rating rating={rating} />
        </View>
        <Image style={styles.recipeImage} source={{ uri: image }} />
      </View>

      <View style={[styles.row, styles.footer]}>
        {author ? (
          <View style={styles.row}>
            <Image style={styles.authorImage} source={{ uri: author?.image }} />
            <Text style={styles.footerText}>By {author?.name}</Text>
          </View>
        ) : <View />}

        {time ? (
          <View style={styles.row}>
            <Image style={styles.timerIcon} source={require('../../../assets/timer.png')} />
            <Text style={styles.footerText}>{time}</Text>
          </View>
        ) : <View />}
      </View>
    </TouchableOpacity>
  )
};

export default React.memo(RecipeCard);
