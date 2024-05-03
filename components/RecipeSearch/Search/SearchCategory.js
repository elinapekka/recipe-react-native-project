import { useEffect, useState } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Card, Button, Text } from '@rneui/themed';
import { fetchRepositories, getAllCategories } from '../../../databases+apis/RecipeApiLinks';

export default function SearchCategory({ navigation }) {
    const [keywordList, setKeywordList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchRepositories(getAllCategories);
                setKeywordList(data.categories);
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
                <View>
                    {
                        keywordList.map((l, i) => (
                            <TouchableOpacity key={i} onPress={() => navigation.navigate('SearchResult', { searchMethod: 'category', searchCriteria: l.strCategory })}>
                                <Card>
                                    <Card.Title h2>{l.strCategory}</Card.Title>
                                </Card>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </ScrollView>
        )
    }
};