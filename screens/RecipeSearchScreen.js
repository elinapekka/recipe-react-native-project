import { View } from 'react-native';
import { RecipeKeywordList } from '../components/RecipeSearch/RecipeKeywordList';
import SearchResult from '../components/RecipeSearch/SearchResults';
import IndividualRecipe from '../components/RecipeSearch/SingleRecipe/IndividualRecipe';
import SearchPick from '../components/RecipeSearch/Search/SearchPick';
import SearchCategory from '../components/RecipeSearch/Search/SearchCategory';
import SearchIngredients from '../components/RecipeSearch/Search/SearchIngredients';
import SearchArea from '../components/RecipeSearch/Search/SearchArea';

/*
function RecipeSearchScreenKeywords({ navigation }) {
    return (
        <View>
            <RecipeKeywordList navigation={navigation} />
        </View>
    );
}
*/

function SearchPickScreen({ navigation }) {
    return (
        <View>
            <SearchPick navigation={navigation} />
        </View>
    );
}

function SearchCategoryScreen({ navigation }) {
    return (
        <View>
            <SearchCategory navigation={navigation} />
        </View>
    );
}

function SearchAreaScreen({ navigation }) {
    return (
        <View>
            <SearchArea navigation={navigation} />
        </View>
    );
}

function SearchIngredientsScreen({ navigation }) {
    return (
        <View>
            <SearchIngredients navigation={navigation} />
        </View>
    );
}

function RecipeSearchResultsScreen({ route, navigation }) {
    const { searchMethod, searchCriteria } = route.params;
    return (
        <View>
            <SearchResult searchMethod={searchMethod} searchCriteria={searchCriteria} navigation={navigation} />
        </View>
    );
};

function SelectedRecipeScreen({ route, navigation }) {
    const { idMeal } = route.params;
    return (
        <View>
            <IndividualRecipe idMeal={idMeal} navigation={navigation} />
        </View>
    )
}

export { SearchPickScreen, SearchCategoryScreen, SearchAreaScreen, SearchIngredientsScreen, RecipeSearchResultsScreen, SelectedRecipeScreen };