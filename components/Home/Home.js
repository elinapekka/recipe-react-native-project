import { ScrollView } from 'react-native';
import RecipeCategoryWheel from './RecipeCategoryWheel';
import RecipeSuggestion from './RecipeSuggestion';

export default function Home({ navigation }) {
    return (
        <ScrollView>
            <RecipeCategoryWheel navigation={navigation} />
            <RecipeSuggestion navigation={navigation} />
        </ScrollView>
    );
};