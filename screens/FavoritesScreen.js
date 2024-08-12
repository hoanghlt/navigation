import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FavoritesContext } from '../store/context/favorites-context';
import { MEALS } from '../data/dummy-data';
import MealsList from '../components/MealsList/MealsList';

function FavoritesScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext);

  const favoraiteMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );
  if(favoraiteMeals.length === 0)
  {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorites meals yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoraiteMeals}/>;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});