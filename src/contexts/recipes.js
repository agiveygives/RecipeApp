import { createContext, useEffect, useState } from 'react';
import { getRecipesList } from '../http';

export const RecipesContext = createContext(null);

export const RecipesProvider = ({children}) => {
  const [recipes, setRecipes] = useState([]);

  const handleRecipesFetch = async () => {
    try {
      const recipes = await getRecipesList(null, '15');
      setRecipes(recipes?.data?.results);
    } catch {
      console.log('error fetching recipes');
    }
  }

  useEffect(() => {
    handleRecipesFetch()
  }, []);

  return (
    <RecipesContext.Provider value={{recipes, setRecipes}}>
      {children}
    </RecipesContext.Provider>
  )
}