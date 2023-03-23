import React from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const Categories = ({categories, selectedCategory, onCategoryPress}) => {
  return (
    <FlatList
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => String(item)}
      data={categories}
      renderItem={({item}) => {
        const isSelected = selectedCategory === item;
        const displayName = item?.replace('_', ' ');

        return (
          <TouchableOpacity
            onPress={() => onCategoryPress(item)}
            style={[
              styles.categoryContainer,
              isSelected ? styles.selectedContainer : {},
            ]}>
            <Text style={[styles.category, isSelected ? styles.selected : {}]}>
              {displayName}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default React.memo(Categories);
