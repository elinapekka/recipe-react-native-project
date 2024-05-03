import { View } from 'react-native';
import Home from '../components/Home/Home';

export default function HomeScreen({ navigation }) {
    return (
        <View>
            <Home navigation={navigation}/>
        </View>
    );
};