import { useState, useEffect, useCallback } from 'react';
import { ListItem, Button, CheckBox, FAB, Icon } from '@rneui/themed';
import { View, ScrollView, Text, Dimensions } from 'react-native';
import { updateShoppingList, deleteShoppingListItem, editShoppingListItem, deleteAllShoppingListItems } from '../../databases+apis/shoppinglistDB';
import AddShoppingListItem from './AddShoppingListItem';
import EditShoppingListItem from './EditShoppingListItem';
import { useFocusEffect } from '@react-navigation/native';
import { viewStyles } from '../../styling/stylesheet';
import DeleteAllShoppingListItems from './DeleteAllShoppingListItems';

export default function ShoppingList() {

    const [shoppingList, setShoppingList] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [checkedItemsAmount, setCheckedItemsAmount] = useState(0);

    const update = () => {
        updateShoppingList(setShoppingList);
    }

    const deleteItem = (id) => {
        deleteShoppingListItem(id);
        update();
    }

    const toggleCheckbox = (l) => {
        return () => {
            editShoppingListItem({
                id: l.id,
                item: l.item,
                amount: l.amount,
                checked: l.checked === 1 ? false : true,
                price: l.price
            });
            update();
        };
    };

    const getTotalPrice = () => {
        let sum = 0;
        shoppingList.forEach((l) => sum += l.price);
        setTotalPrice(sum.toFixed(2));
    }

    const getAmountOfCheckedItems = () => {
        let checkedItem = 0;
        shoppingList.forEach((l) => l.checked === 1 ? checkedItem++ : null);
        setCheckedItemsAmount(checkedItem);
    }

    const deleteAllItems = () => {
        deleteAllShoppingListItems();
        update();
    }

    const refreshDataArray = useCallback(() => {
        update();
    }, []);

    useFocusEffect(refreshDataArray);

    useEffect(() => {
        getAmountOfCheckedItems();
        getTotalPrice();
    }, [shoppingList]);


    return (
        <ScrollView>
            <View style={viewStyles.rowView}>
                <View>
                    <Text>Checked items: {checkedItemsAmount} / {shoppingList.length}</Text>
                    <Text>Total price: {totalPrice} €</Text>
                </View>
                <View style={{ marginLeft: 'auto', }}>
                    <Button
                        onPress={() => update()}
                        buttonStyle={{ backgroundColor: '#EDB41F' }}
                        //style={{width: '50%'}}
                    >
                        <Icon name="refresh" color="white" />
                        Refresh
                    </Button>
                    
                    <DeleteAllShoppingListItems deleteAllItems={deleteAllItems} />
                </View>

            </View>
            <AddShoppingListItem updateShoppingList={update} />
            <View>
                {
                    shoppingList.map((l, i) => (
                        <ListItem.Swipeable
                            leftContent={(reset) => (
                                <EditShoppingListItem
                                    update={update}
                                    itemInfo={l}
                                    reset={reset}
                                />
                            )}

                            rightContent={(reset) => (
                                <Button
                                    title="Delete"
                                    onPress={() => {
                                        deleteItem(l.id)
                                        reset();
                                    }}
                                    icon={{ name: 'delete', color: 'white' }}
                                    buttonStyle={{
                                        minHeight: '100%', width: '100%', backgroundColor: 'red'
                                    }}
                                />
                            )}
                            key={i}
                            bottomDivider
                        >
                            <ListItem.Content>
                                <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>
                                    <CheckBox
                                        checked={l.checked === 1 ? true : false}
                                        onPress={toggleCheckbox(l)}
                                        iconType="material-community"
                                        checkedIcon="checkbox-outline"
                                        uncheckedIcon={'checkbox-blank-outline'}
                                    />
                                    <View style={{ marginRight: 'auto' }}>
                                        <ListItem.Title>
                                            {l.amount ? `${l.amount} ${l.item}` : l.item}
                                        </ListItem.Title>
                                        <ListItem.Subtitle>{l.price.toFixed(2)}€</ListItem.Subtitle>
                                    </View>

                                </View>
                            </ListItem.Content>
                        </ListItem.Swipeable>
                    ))
                }
            </View>
        </ScrollView >
    )
};