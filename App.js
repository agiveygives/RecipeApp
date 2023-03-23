import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { RecipesProvider } from './src/contexts/recipes';
import { FeaturedRecipesProvider } from './src/contexts/featuredRecipes';
import Splash from './src/screens/Splash';
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import RecipeDetails from './src/screens/RecipeDetails';

const Stack = createStackNavigator();

const BackButton = (props) => (
  <Pressable onPress={props.onPress}>
    <Image style={styles.back} source={require('./assets/back.png')} />
  </Pressable>
)

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff'
  }
}

export default function App() {
  return (
    <RecipesProvider>
      <FeaturedRecipesProvider>
        <NavigationContainer theme={theme}>
          <Stack.Navigator screenOptions={{headerTitleAlign: 'center', headerShadowVisible: false}}>
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{headerLeft: null, gestureEnabled: false}} />
            <Stack.Screen name="Search" component={Search} options={{headerLeft: (props) => <BackButton {...props} />}} />
            <Stack.Screen name="RecipeDetails" component={RecipeDetails} options={{headerLeft: (props) => (<BackButton {...props} />), title: ''}} />
          </Stack.Navigator>
        </NavigationContainer>
      </FeaturedRecipesProvider>
    </RecipesProvider>
  );
}

const styles = StyleSheet.create({
  back: {
    width: 24,
    height: 24,
    margin: 16,
  },
});
