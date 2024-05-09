import { Card, Icon } from '@rneui/themed';
import { ScrollView, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { viewStyles } from '../../../styling/stylesheet';

export default function SearchPick({ navigation }) {
    return (
        <ScrollView>
            <TouchableOpacity onPress={() => navigation.navigate('SearchCategories')}>
                <Card>

                    <Icon
                        name='star'
                        type='antdesign'
                        color='#60AC98'
                        size={30}
                        padding={10}
                    />
                    <Card.Title h3>Search by category</Card.Title>

                </Card>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SearchAreas')}>
                <Card>
                    <Icon
                        name='star'
                        type='antdesign'
                        color='#EDB41F'
                        size={30}
                        padding={10}
                    />
                    <Card.Title h3>Search by area</Card.Title>
                </Card>
            </TouchableOpacity>
        </ScrollView>
    )
};