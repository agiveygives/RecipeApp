import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import Input from '../../components/Input';
import Card from '../../components/Card';
import { RecipesContext } from '../../contexts/recipes';
import styles from './styles';

const Search = () => {
  const { recipes } = useContext(RecipesContext)
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    if (keyword.length > 2) {
      setFilteredRecipes(recipes.filter((recipe) => (
        recipe?.name.toLowerCase().includes(keyword.toLowerCase())
      )))
    } else {
      setFilteredRecipes([]);
    }
  }, [keyword]);

  return (
      <SafeAreaView style={styles.container}>
        <Input autoFocus onChangeText={setKeyword} value={keyword} />

        <FlatList
          numColumns={2}
          data={filteredRecipes}
          keyExtractor={(recipe) => String(recipe.id)}
          renderItem={({item}) => (
            <Card
              title={item.name}
              image={item.thumbnail_url}
              servings={item?.num_servings}
              onPress={() => {}}
            />
          )}
        />
      </SafeAreaView>
  );
}

export default React.memo(Search);
