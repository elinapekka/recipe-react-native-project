import { fetchRepositories, getRandomRecipe } from "../../databases+apis/RecipeApiLinks";
import { View, Image, TouchableOpacity } from "react-native";
import { Text, FAB } from "@rneui/themed";
import { useEffect, useState } from "react";
import { LinearGradient } from 'expo-linear-gradient'; 


export default function RecipeSuggestion({ navigation }) {

    const [randomRecipe, setRandomRecipe] = useState({})

    const refresh = () => {
        const fetchData = async () => {
            try {
                const data = await fetchRepositories(getRandomRecipe);
                setRandomRecipe(data.meals[0]);

            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }

    useEffect(() => {
        refresh();
    }, []);

    return (
        <TouchableOpacity onPress={() => navigation.navigate('SelectedRecipe', { idMeal: randomRecipe.idMeal })}>
            <View>
                <View style={{ aspectRatio: 13 / 14 }}>
                    <Image
                        style={{ flex: 1, width: undefined, height: undefined }}
                        resizeMode="cover"
                        source={{ uri: randomRecipe.strMealThumb }}
                    />
                    <LinearGradient
                        colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']}
                        style={{
                            position: 'absolute',
                            left: 0,
                            right: 0,
                            bottom: 0,
                            height: '50%',
                        }}
                    />
                    <FAB
                        icon={{ name: 'refresh', color: 'white' }}
                        onPress={() => refresh()}
                        style={{ position: 'absolute', top: 5, right: 5 }}
                    />
                    <Text h1 style={{ position: 'absolute', bottom: 5, width: '100%', color: 'white' }}>{randomRecipe.strMeal}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}