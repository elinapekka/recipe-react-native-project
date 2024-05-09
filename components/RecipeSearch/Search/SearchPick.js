import { Card } from '@rneui/themed';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function SearchPick({ navigation }) {
    return (
        <ScrollView>
            <TouchableOpacity onPress={() => navigation.navigate('SearchCategories')}>
                <Card>
                    <Card.Title h3>Search by category</Card.Title>
                </Card>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SearchAreas')}>
                <Card>
                    <Card.Title h3>Search by area</Card.Title>
                </Card>
            </TouchableOpacity>
        </ScrollView>
    )
};