import { useEffect, useState } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Card, Button, Text } from '@rneui/themed';
import { fetchRepositories, getAllAreas } from '../../../databases+apis/RecipeApiLinks';

export default function SearchArea({navigation}) {
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
                                    <Card.Title h3>{l.strArea}</Card.Title>
                                </Card>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </ScrollView>
        )
    }
};