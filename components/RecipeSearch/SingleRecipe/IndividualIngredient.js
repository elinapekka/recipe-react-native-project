import { useState } from 'react';
import { viewStyles } from '../../../styling/stylesheet';
import { View } from 'react-native';
import { ListItem, Button, Text, Icon } from '@rneui/themed';
import { saveShoppingListItem } from '../../../databases+apis/shoppinglistDB';

export default function IndividualIngredient ({item}) {
    const [added, setAdded] = useState(false);


    const addToShoppingList = (ingredient, measurement) => {
        saveShoppingListItem({item: ingredient, amount: measurement, checked: false, price: '0'});
        setAdded(true);
    }


    return(
        <ListItem bottomDivider>
            <ListItem.Content>
                <View style={viewStyles.rowView}>
                    <ListItem.Title style={{width: '75%'}}>
                        {item.measurement} {item.ingredient}
                    </ListItem.Title>
                    <View style={{marginLeft: 'auto'}}>
                        {
                            added ? 
                                <Button color="success" > 
                                    <Icon name="check" color="white"/>
                                    Added
                                </Button>
                            : 
                                <Button onPress={() => addToShoppingList(item.ingredient, item.measurement)} >
                                    <Icon name="add" color="white"/>
                                    Add
                                </Button>
                        }
                    </View>
                </View>
            </ListItem.Content>
        </ListItem>
    )
}