import { useEffect, useState } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Card, Button, Text, Icon } from '@rneui/themed';
import { fetchRepositories, getAllAreas } from '../../../databases+apis/RecipeApiLinks';
import { viewStyles } from '../../../styling/stylesheet';

export default function SearchArea({ navigation }) {
    const [keywordList, setKeywordList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchRepositories(getAllAreas);
                setKeywordList(data.meals);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    if (!keywordList) {
        return (
            <View>
                <Text>No recipes found.</Text>
            </View>
        )
    } else {
        return (
            <ScrollView>
                <Button icon={{ name: 'arrow-back', color: 'white' }} onPress={() => navigation.goBack()} title="Go back" />
                <View>
                    {
                        keywordList.map((l, i) => (
                            <TouchableOpacity key={i} onPress={() => navigation.navigate('SearchResult', { searchMethod: 'area', searchCriteria: l.strArea })}>
                                <Card>
                                    <View style={viewStyles.rowView}>
                                        <Icon
                                            name='star'
                                            type='antdesign'
                                            color='#EDB41F'
                                            size={30}
                                        //padding={10}
                                        />
                                        <Card.Title h3 padding={10} marginTop={'auto'} marginBottom={'auto'}>{l.strArea}</Card.Title>
                                    </View>
                                </Card>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </ScrollView>
        )
    }
};