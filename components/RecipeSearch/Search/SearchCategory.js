import { useEffect, useState } from 'react';
import { View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Card, Button, Text, FAB, Header } from '@rneui/themed';
import { fetchRepositories, getAllCategories } from '../../../databases+apis/RecipeApiLinks';
import { viewStyles } from '../../../styling/stylesheet';

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
                <Button  icon={{ name: 'arrow-back', color: 'white' }} onPress={() => navigation.goBack()} title="Go back" />
                <View>
                    {
                        keywordList.map((l, i) => (
                            <TouchableOpacity key={i} onPress={() => navigation.navigate('SearchResult', { searchMethod: 'category', searchCriteria: l.strCategory })}>
                                <Card>
                                    <View style={viewStyles.rowView}>
                                        <Card.Title h3>{l.strCategory}</Card.Title>
                                        <Image
                                            style={{ width: 170, height: 110, marginLeft: 'auto' }}
                                            resizeMode="cover"
                                            source={{ uri: l.strCategoryThumb }}
                                        />
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