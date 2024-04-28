import { Dialog } from "@rneui/themed";
import { Text } from 'react-native';



export default function ConfirmationMessage({message, confirmAction, setVisible, visible}) {

    const confirm = () => {
        confirmAction();
        setVisible(false);
    }

    return(
        <Dialog
        isVisible={visible}
        onBackdropPress={setVisible(false)}
      >
        <Dialog.Title title="Dialog Title"/>
        <Text>{message}</Text>
        <Dialog.Actions>
          <Dialog.Button title="ACTION 1" onPress={() => console.log('Primary Action Clicked!')}/>
          <Dialog.Button title="ACTION 2" onPress={() => console.log('Secondary Action Clicked!')}/>
        </Dialog.Actions>
      </Dialog>
    )
}