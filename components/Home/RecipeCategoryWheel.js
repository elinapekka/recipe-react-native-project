import { useState, useEffect } from "react";
import { ScrollView, View, Image } from "react-native";
import { TouchableOpacity } from 'react-native';
import { Card } from "@rneui/themed";
import { fetchRepositories, getAllCategories } from "../../databases+apis/RecipeApiLinks";

export default function RecipeCategoryWheel({ navigation }) {
    const [keywordList, setKeywordList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchRepositories(getAllCategories);
                const sortedKeywords = data.categories.sort((a, b) => a.strCategory.localeCompare(b.strCategory));
                setKeywordList(sortedKeywords);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {
                keywordList.map((category, i) => (
                    <TouchableOpacity key={i} onPress={() => navigation.navigate('SearchResult', { searchMethod: 'category', searchCriteria: category.strCategory })} >
                        <Card>
                            <View style={{ alignItems: 'center', }}>
                                <Image
                                    style={{ width: 80, height: 80, borderRadius: 50, backgroundColor: '#60AC98', marginBottom: 10,}}
                                    source={{ uri: category.strCategoryThumb }}
                                />
                                <Card.Title>{category.strCategory}</Card.Title>
                            </View>
                        </Card>
                    </TouchableOpacity>
                ))
            }
        </ScrollView>
    )
}