import { useState } from 'react';
import { Button, Dialog, Input, Icon } from '@rneui/themed';
import { saveShoppingListItem } from '../../databases+apis/shoppinglistDB';


export default function AddShoppingListItem({updateShoppingList}) {

    const [dialogVisible, setDialogVisible] = useState(false);
    const openDialog = () => {
        setDialogVisible(true);
    }
    const closeDialog = () => {
        setDialogVisible(false);
    }

    const [newItem, setNewItem] = useState({item: '', amount: '', checked: false, price: '0'})
    
    const onSave = async () => {
        try {
            await saveShoppingListItem(newItem);
    
            updateShoppingList();
    
            closeDialog();
            setNewItem({ item: '', amount: '', checked: false, price: '0' });
        } catch (error) {
            console.error("Error onSave:", error);
        }
    };

    return ( 
        <>
            <Button 
                style={{paddingLeft: 10}}
                onPress={openDialog}
            >
                <Icon name="add" color="white" />
                Add
            </Button>
            <Dialog
                isVisible={dialogVisible}
                onBackdropPress={closeDialog}
            >
                <Dialog.Title title="Add shopping list item"/>
                <Input
                    placeholder="Name"
                    //leftIcon={{ type: 'font-awesome', name: 'comment' }}
                    onChangeText={value => setNewItem({ ...newItem, item: value })}
                />
                <Input
                    placeholder="Amount (optional)"
                    //leftIcon={{ type: 'font-awesome', name: 'comment' }}
                    onChangeText={value => setNewItem({ ...newItem, amount: value })}
                />
                <Input
                    placeholder="Price (optional)"
                    keyboardType='numeric'
                    //leftIcon={{ type: 'font-awesome', name: 'comment' }}
                    onChangeText={value => setNewItem({ ...newItem, price: value })}
                />
                <Dialog.Actions>
                    <Dialog.Button
                    title="ADD"
                    onPress={onSave}
                    />
                    <Dialog.Button title="CANCEL" onPress={closeDialog} />
                </Dialog.Actions>
            </Dialog>
        </>
    )
};