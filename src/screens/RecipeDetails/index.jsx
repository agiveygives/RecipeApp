import React from 'react';
import {ScrollView, SafeAreaView, Image, Text, View} from 'react-native';
import Title from '../../components/Title';
import styles from './styles';

const RecipeDetails = ({ route }) => {
  const { item } = route?.params || {};
  const nutrition = item?.nutrition || {};
  delete nutrition?.updated_at;

  const nutritionKeys = Object.keys(nutrition);

  const instructions = item?.instructions || [];

  return (
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Image source={{uri: item?.thumbnail_url }} style={styles.image} />
          <Title style={styles.title} text={item.name} />

          {
            nutritionKeys.map((key) => (
              <View key={key} style={styles.row}>
                <Text style={styles.key}>{key}</Text>
                <Text style={styles.value}>{nutrition[key]}</Text>
              </View>
            ))
          }

          <Title style={styles.instructionsTitle} text="Instructions" />

          {
            instructions?.map((step) => (
              <View key={step.id} style={styles.instructionRow}>
                <Text style={styles.position}>{step.position}</Text>
                <Text style={styles.instruction}>{step.display_text}</Text>
              </View>
            ))
          }

          {
            !instructions.length ? (
              <Text style={styles.value}>No instructions found</Text>
            ) : null
          }
        </ScrollView>
      </SafeAreaView>
  )
}

export default React.memo(RecipeDetails);
