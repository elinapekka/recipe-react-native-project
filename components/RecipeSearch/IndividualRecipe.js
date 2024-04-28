import { useState, useEffect } from 'react';
import { View, ScrollView, Image } from 'react-native';
import { fetchRepositories, getRecipeById } from './RecipeApiLinks';
import IngredientsList from './IngredientsList';
import StepsList from './StepsList';
import { Button, Text } from '@rneui/themed';
import SaveExistingRecipe from '../SaveExistingRecipe';
import { viewStyles } from '../../styling/stylesheet';


export default function IndividualRecipe({idMeal, navigation}) {
    const [recipeInfo, setRecipeInfo] = useState('');

    const fetchData = async () => {
        try {
            const data = await fetchRepositories(getRecipeById(idMeal));
            setRecipeInfo(data.meals[0]);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
        console.log(recipeInfo)
    }, [])

    return(
        <ScrollView>
            <Button onPress={() => navigation.goBack()} title="Go back" />
            <View style={{ aspectRatio: 16 / 15 }}>
                <Image
                    style={{ flex: 1, width: undefined, height: undefined }}
                    resizeMode="cover"
                    source={{ uri: recipeInfo.strMealThumb }}
                />
            </View>
            <View style={viewStyles.rowView}>
                <Text h1>{recipeInfo.strMeal}</Text>
                <SaveExistingRecipe id={recipeInfo.idMeal} />
            </View>
            <IngredientsList recipeInfo={recipeInfo} />
            <StepsList instructionsString={recipeInfo.strInstructions}/>
        </ScrollView>
    )
}