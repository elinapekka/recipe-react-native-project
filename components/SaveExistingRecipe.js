import { CheckBox } from "@rneui/themed";
import { saveRecipe, savedRecipeExists, deleteSavedRecipe } from "../databases+apis/savedRecipesDB";
import { useEffect, useState } from "react";
import { useFocusEffect } from '@react-navigation/native';


export default function SaveExistingRecipe({ id }) {
    const [alreadySaved, setAlreadySaved] = useState(false);

    const checkSave = () => {
        savedRecipeExists(id, rowsAffected => {
            if (rowsAffected === 0) {
                setAlreadySaved(false);
            } else {
                setAlreadySaved(true);
            }
        });
    }

    const toggleCheckbox = () => {
        if (alreadySaved) {
            deleteSavedRecipe(id);
            setAlreadySaved(false);
        } else {
            saveRecipe(id);
            setAlreadySaved(true);
        }
    };

    useFocusEffect(checkSave);

    useEffect(() => {
        checkSave();
    }, [id]);

    return (
        <CheckBox
            containerStyle ={{backgroundColor: 'transparent', padding: 0}}
            checked={alreadySaved}
            checkedIcon="heart"
            uncheckedIcon="heart-o"
            checkedColor="red"
            onPress={() => toggleCheckbox()}
        />
    )
}