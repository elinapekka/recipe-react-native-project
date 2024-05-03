import { View, Text } from 'react-native';
import RecipeCategoryWheel from './RecipeCategoryWheel';
import RecipeSuggestion from './RecipeSuggestion';

export default function Home({ navigation }) {
    return (
        <View>
            <RecipeCategoryWheel navigation={navigation} />
            <RecipeSuggestion navigation={navigation}/>
            <Text>This is HomeScreen</Text>
        </View>
    );
};