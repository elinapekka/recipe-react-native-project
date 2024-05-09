import { useState } from 'react';
import { Button, Dialog, Input } from '@rneui/themed';
import { editShoppingListItem } from '../../databases+apis/shoppinglistDB';


export default function EditShoppingListItem({ update, itemInfo, reset }) {

    const [selectedItem, setSelectedItem] = useState({});

    const [dialogVisible, setDialogVisible] = useState(false);
    const openDialog = () => {
        setDialogVisible(true);
        setSelectedItem(itemInfo);
    }
    const closeDialog = () => {
        setDialogVisible(false);
    }

    const onSave = async () => {
        try {
            if (selectedItem.price === '') {
                setSelectedItem({ ...selectedItem, price: '0' });
            }
            editShoppingListItem(selectedItem);
            update();
            closeDialog();
            setSelectedItem({});
        } catch (error) {
            console.error("Error onSave:", error);
        }
    };

    return (
        <>
            <Button
                title="Edit"
                onPress={() => {
                    openDialog();
                    reset();
                }}
                icon={{ name: 'info', color: 'white' }}
                buttonStyle={{ minHeight: '100%' }}
            />
            <Dialog
                isVisible={dialogVisible}
                onBackdropPress={closeDialog}
            >
                <Dialog.Title title="Add shopping list item" />
                <Input
                    value={selectedItem.item}
                    placeholder="Name"
                    //leftIcon={{ type: 'font-awesome', name: 'comment' }}
                    onChangeText={value => setSelectedItem({ ...selectedItem, item: value })}
                />
                <Input
                    value={selectedItem.amount}
                    placeholder="Amount (optional)"
                    //leftIcon={{ type: 'font-awesome', name: 'comment' }}
                    onChangeText={value => setSelectedItem({ ...selectedItem, amount: value })}
                />
                <Input
                    value={selectedItem.price === 0 ? '' : String(selectedItem.price)}
                    placeholder="Price (optional)"
                    keyboardType='numeric'
                    //leftIcon={{ type: 'font-awesome', name: 'comment' }}
                    onChangeText={value => setSelectedItem({ ...selectedItem, price: value })}
                />
                <Dialog.Actions>
                    <Dialog.Button
                        title="SAVE"
                        onPress={onSave}
                    />
                    <Dialog.Button title="CANCEL" onPress={closeDialog} />
                </Dialog.Actions>
            </Dialog>
        </>
    )
};