import { useState, useEffect } from 'react';
import { View } from 'react-native';
import { ListItem, Button, Text, Icon } from '@rneui/themed';
import { saveShoppingListItem } from '../../databases/shoppinglistDB';
import { viewStyles } from '../../styling/stylesheet';
import IndividualIngredient from './IndividualIngredient';

export default function IngredientsList({ recipeInfo }) {
    const [ingredients, setIngredients] = useState([]);

    const getIngredientsAndMeasurements = () => {
        const tempIngredients = [];

        // each recipe has only 20 slots for ingredients/measurement
        for (let i = 1; i <= 20; i++) {
            const ingredient = recipeInfo[`strIngredient${i}`];
            if (ingredient && ingredient.length > 0) {
                tempIngredients.push({
                    ingredient: ingredient,
                    measurement: recipeInfo[`strMeasure${i}`],
                });
            } else {
                break;
            }
        }
        setIngredients(tempIngredients);
    }

    /*
    const addAllToShoppingList = () => {
        ingredients.forEach( item => {
            saveShoppingListItem({item: item.ingredient, amount: item.measurement, checked: false, price: 0})
        })
    }
    */

    useEffect(() => {
        getIngredientsAndMeasurements();
    }, [recipeInfo]);

    return (
        <View>
            <View style={viewStyles.rowView}>
                <Text h2>Ingredients</Text>
                <Text style={{ marginLeft: 'auto', marginRight: 5, width: '25%', textAlign: 'center' }}>Add to Shopping List</Text>
            </View>
            {
                ingredients.map((l, i) => (
                    /*
                    <ListItem key={i} bottomDivider>
                        <ListItem.Content>
                            <View style={viewStyles.rowView}>
                                <ListItem.Title>{l.measurement} {l.ingredient}</ListItem.Title>
                                <Button 
                                    title="+ add" 
                                    onPress={() => addToShoppingList(l.ingredient, l.measurement)} 
                                />    
                            </View>
                        </ListItem.Content>
                    </ListItem>
                    */
                    <View key={i}>
                        <IndividualIngredient item={l} />
                    </View>
                ))
            }
        </View>
    )
}