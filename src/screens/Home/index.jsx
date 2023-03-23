import React, {useContext, useEffect, useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import { FeaturedRecipesContext } from '../../contexts/featuredRecipes';
import { RecipesContext } from '../../contexts/recipes';
import Input from '../../components/Input';
import Title from '../../components/Title';
import Categories from '../../components/Categories';
import RecipeCard from '../../components/RecipeCard';
import styles from './styles';
import Card from '../../components/Card';

const ALL = 'All';

const Home = ({ navigation }) => {
  const { featuredRecipes } = useContext(FeaturedRecipesContext);
  const { recipes } = useContext(RecipesContext);
  const [selectedTag, setSelectedTag] = useState(ALL);
  const [tags, setTags] = useState([ALL]);

  useEffect(() => {
    const tags = [];

    recipes.forEach((recipe) => {
      tags.push(...recipe.tags.map((tag) => (
        tag.name
      )));
    });

    setTags([ALL, ...new Set(tags)])
  }, [recipes]);

  const filterByTag = () => {
    return recipes.filter((recipe) => (
      recipe.tags.findIndex((tag) => tag.name === selectedTag) >= 0
    ))
  }

  return (
    <SafeAreaView style={styles.container}>
      <Input pressable onPress={() => navigation.navigate('Search')} />

      <Title text="Featured Recipes" />

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.recipeList}
        data={featuredRecipes}
        keyExtractor={(recipe) => String(recipe.id)}
        renderItem={({item}) => (
          <RecipeCard
            onPress={() => navigation.navigate('RecipeDetails', { item })}
            title={item.name}
            time={item?.cook_time_minutes}
            rating={5 * (item?.user_ratings?.score || 0)}
            image={item.thumbnail_url}
            author={item?.credits?.length
              ? { name: item?.credits[0]?.name, image: item?.credits[0]?.image_url }
              : null}
          />
        )}
      />

      <Categories
        categories={tags}
        selectedCategory={selectedTag}
        onCategoryPress={setSelectedTag}
      />

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.recipeList}
        data={selectedTag === ALL ? recipes : filterByTag()}
        keyExtractor={(recipe) => String(recipe.id)}
        renderItem={({item}) => (
          <Card
            title={item.name}
            image={item.thumbnail_url}
            servings={item?.num_servings}
            onPress={() => navigation.navigate('RecipeDetails', { item })}
          />
        )}
      />
    </SafeAreaView>
  )
}

export default React.memo(Home);
