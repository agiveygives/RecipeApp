import { createContext, useEffect, useState } from 'react';
import { getRecipesList } from '../http';

export const FeaturedRecipesContext = createContext(null);

export const FeaturedRecipesProvider = ({children}) => {
  const [featuredRecipes, setFeaturedRecipes] = useState([]);

  const handleRecipesFetch = async () => {
    try {
      const recipes = await getRecipesList('healthy', '5');
      setFeaturedRecipes(recipes?.data?.results);
    } catch {
      console.log('error fetching featured recipes');
    }
  }

  useEffect(() => {
    handleRecipesFetch()
  }, []);

  return (
    <FeaturedRecipesContext.Provider value={{featuredRecipes, setFeaturedRecipes}}>
      {children}
    </FeaturedRecipesContext.Provider>
  )
}