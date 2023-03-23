import React from 'react';
import {Text, ImageBackground, Image, SafeAreaView} from 'react-native';
import Button from '../../components/Button';
import styles from './styles';

const Splash = ({navigation}) => {
  return (
    <ImageBackground style={styles.backgroundImage} source={require('../../../assets/splash.png')}>
      <SafeAreaView style={styles.container}>
        <Image source={require('../../../assets/logo.png')} style={styles.logo} />
        <Text style={styles.title}>100k+ Premium Recipes</Text>
      </SafeAreaView>

      <SafeAreaView style={styles.container}>
        <Text style={styles.largeTitle}>Get</Text>
        <Text style={styles.largeTitle}>Cooking</Text>

        <Text style={styles.subtitle}>Simple way to find Tasty Recipes</Text>
        <Button onPress={() => navigation.navigate('Home')}>
          Start Cooking
        </Button>
      </SafeAreaView>
    </ImageBackground>
  )
}

export default React.memo(Splash);
