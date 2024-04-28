import { useState, useEffect } from 'react';
import { getRecipeById, fetchRepositories } from "../RecipeSearch/RecipeApiLinks";
import RecipeCard from '../RecipeSearch/RecipeCard';

export default function SavedRecipeItem({itemId, openRecipe, update}) {
    const [recipeInfo, setRecipeInfo] = useState('');

    const fetchData = async () => {
        try {
            const data = await fetchRepositories(getRecipeById(itemId));
            setRecipeInfo(data.meals[0]);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (itemId) {
            fetchData();
            console.log(itemId)
        }
    }, [])

    return (
        <RecipeCard recipe={recipeInfo} openRecipe={openRecipe} />
    )
}