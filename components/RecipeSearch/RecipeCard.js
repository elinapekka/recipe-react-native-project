import { Card, Button, Text } from '@rneui/themed';
import { View, ScrollView, ActivityIndicator, Image, FlatList } from 'react-native';
import SaveExistingRecipe from '../SaveExistingRecipe';
import { TouchableOpacity } from 'react-native';
import { viewStyles, textStyles } from '../../styling/stylesheet';

export default function RecipeCard({ recipe, openRecipe }) {
    return (
        <TouchableOpacity onPress={openRecipe(recipe.idMeal)}>
            <Card>
                <View style={{ aspectRatio: 16 / 9 }}>
                    <Image
                        style={{ flex: 1, width: undefined, height: undefined }}
                        resizeMode="cover"
                        source={{ uri: recipe.strMealThumb }}
                    />
                </View>
                <View style={viewStyles.rowView}>  
                    <SaveExistingRecipe id={recipe.idMeal} />
                    <Text h3 style={{width: "75%", marginLeft: 0,}}>{recipe.strMeal}</Text> 
                </View>
            </Card>
        </TouchableOpacity>
    )
}