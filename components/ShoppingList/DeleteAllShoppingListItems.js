import { useState } from 'react';
import { Button, Dialog, Input, Icon } from '@rneui/themed';

export default function DeleteAllShoppingListItems({ deleteAllItems }) {

    const [dialogVisible, setDialogVisible] = useState(false);
    const openDialog = () => {
        setDialogVisible(true);
    }
    const closeDialog = () => {
        setDialogVisible(false);
    }

    const onConfirm = () => {
        deleteAllItems();
        closeDialog();
    }

    return (
        <>
            <Button
                onPress={() => openDialog()}
                buttonStyle={{ backgroundColor: 'red' }}
            >
                <Icon name="delete" color="white" />
                Reset
            </Button>
            <Dialog
                isVisible={dialogVisible}
                onBackdropPress={closeDialog}
            >
                <Dialog.Title title="Are you sure you want to reset the shopping list?"/>
                <Dialog.Actions>
                    <Dialog.Button
                    title="RESET"
                    onPress={onConfirm}
                    />
                    <Dialog.Button title="CANCEL" onPress={closeDialog} />
                </Dialog.Actions>
            </Dialog>
        </>
    )
};