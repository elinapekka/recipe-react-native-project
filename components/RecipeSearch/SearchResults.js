import { Button } from '@rneui/themed';
import { View, ScrollView, Text } from 'react-native';
import { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';
import { fetchRepositories, searchByCategory, searchByArea } from '../../databases+apis/RecipeApiLinks';

export default function SearchResult({ searchMethod, searchCriteria, navigation }) {
    const [meals, setMeals] = useState([]);

    const fetchData = async () => {
        try {
            if (searchMethod === 'category') {
                const data = await fetchRepositories(searchByCategory(searchCriteria));
                setMeals(data.meals);
            } else if (searchMethod === 'area') {
                const data = await fetchRepositories(searchByArea(searchCriteria));
                setMeals(data.meals)
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const openRecipe = (idMeal) => {
        return () => {
            console.log(idMeal)
            navigation.navigate('SelectedRecipe', { idMeal: idMeal });
        };
    }

    if (!meals) {
        return (
            <View>
                <Text>No search results found</Text>
            </View>
        )
    } else {
        return (
            <ScrollView>
                <Button icon={{ name: 'arrow-back', color: 'white' }} onPress={() => navigation.goBack()} title="Go back" />
                <View>
                    {
                        meals.map((l, i) => (
                            <View key={i}>
                                <RecipeCard recipe={l} openRecipe={openRecipe} />
                            </View>
                        ))
                    }
                </View>
            </ScrollView>
        );
    }
};