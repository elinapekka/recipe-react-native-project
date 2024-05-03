import { Card, Button, Text } from '@rneui/themed';
import { View, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import SearchBarComponent from '../SearchBarComponent';
import { TouchableOpacity } from 'react-native';
import { fetchRepositories, getAllCategories } from '../../databases+apis/RecipeApiLinks';

function RecipeKeywordList({navigation}) {
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

    if(!keywordList) {
        return (
            <View>
                <Text>No recipes found.</Text>
            </View>
        )
    } else {
        return (
            <ScrollView>
                <SearchBarComponent />
                <View>
                    {
                        keywordList.map((l, i) => (
                            <TouchableOpacity key={i} onPress={() => navigation.navigate('SearchResult', { keyword: l.strCategory })}>
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

export {RecipeKeywordList};