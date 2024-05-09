import { ScrollView, View } from "react-native";
import { Button, Text } from "@rneui/themed";
import { useState, useCallback } from 'react';
import { updateSavedRecipes } from "../../databases+apis/savedRecipesDB";
import SavedRecipeItem from "./SavedRecipeItem";
import { useFocusEffect } from '@react-navigation/native';

export default function SavedRecipes({ navigation }) {

    const [savedRecipesList, setSavedRecipesList] = useState([]);

    const update = () => {
        updateSavedRecipes(setSavedRecipesList);
    }

    const refreshDataArray = useCallback(() => {
        update();
    }, []);

    const openRecipe = (id) => {
        return () => {
            navigation.navigate('SavedRecipeSelected', { idMeal: id });
        };
    }

    const refresh = () => {
        update();
    }

    useFocusEffect(refreshDataArray);

    /*
    useEffect(() => {
        refreshDataArray();
    }, [])

    
    useEffect(() => {
        console.log(savedRecipesList);
    }, [savedRecipesList]);
    */

    if (savedRecipesList.length === 0) {
        return (
            <ScrollView>
                <Text h1>no saved recipes</Text>
            </ScrollView>
        )
    } else {
        return (
            <ScrollView>
                <Button icon={{ name: 'refresh', color: 'white' }} title="Refresh" onPress={refresh} />
                <View>
                    {
                        savedRecipesList.map((recipe, i) => (
                            <View key={recipe.id}>

                                <SavedRecipeItem itemId={recipe.id} openRecipe={openRecipe} update={update} />
                            </View>
                        ))
                    }
                </View>

            </ScrollView>
        )
    }
}