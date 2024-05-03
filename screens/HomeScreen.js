import { View, Text } from 'react-native';
import RecipeCategoryWheel from '../components/Home/RecipeCategoryWheel';

export default function HomeScreen() {
    return (
        <View>
            <RecipeCategoryWheel />
            <Text>This is HomeScreen</Text>
        </View>
    );
};