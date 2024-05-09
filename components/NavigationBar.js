import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import { SearchPickScreen, SearchCategoryScreen, SearchAreaScreen, RecipeSearchResultsScreen, SelectedRecipeScreen } from '../screens/RecipeSearchScreen';
import ShoppingListScreen from '../screens/ShoppingListScreen';
import SavedScreen from '../screens/SavedScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
//import SearchResult from './RecipeSearch/SearchResults';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" options={{ headerShown: false }} component={HomeScreen} />
      <Stack.Screen name="SearchResult" options={{ headerShown: false }} component={RecipeSearchResultsScreen} />
      <Stack.Screen name="SelectedRecipe" options={{ headerShown: false }} component={SelectedRecipeScreen} />
    </Stack.Navigator>
  )
}

function RecipeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SearchPick" options={{ headerShown: false }} component={SearchPickScreen} />
      <Stack.Screen name="SearchCategories" options={{ headerShown: false }} component={SearchCategoryScreen} />
      <Stack.Screen name="SearchAreas" options={{ headerShown: false }} component={SearchAreaScreen} />
      <Stack.Screen name="SearchResult" options={{ headerShown: false }} component={RecipeSearchResultsScreen} />
      <Stack.Screen name="SelectedRecipe" options={{ headerShown: false }} component={SelectedRecipeScreen} />
    </Stack.Navigator>
  );
}

function SavedRecipeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SavedRecipes" options={{ headerShown: false }} component={SavedScreen} />
      <Stack.Screen name="SavedRecipeSelected" options={{ headerShown: false }} component={SelectedRecipeScreen} />
    </Stack.Navigator>
  )
}

export default function NavigationBar() {

  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;
      let iconColor = focused ? '#60AC98' : color; 

      if (route.name === 'Home') {
        iconName = 'home';
      } else if (route.name === 'Recipes') {
        iconName = 'nutrition'; //restaurant, pizza, nutrition, ice-cream, fish
      } else if (route.name === 'Shopping List') {
        iconName = 'storefront'; //storefront or bag-handle
      } else if (route.name === 'Saved') {
        iconName = 'heart'
      }

      return <Ionicons name={iconName} size={size} color={iconColor} />;
    },
    tabBarLabelStyle: {
      color: 'gray', // Set the default color for tab labels
      fontWeight: 'bold' // You can also customize other label styles here
    }
  });

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={screenOptions}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Recipes" component={RecipeStack} />
        <Tab.Screen name="Shopping List" component={ShoppingListScreen} />
        <Tab.Screen name="Saved" component={SavedRecipeStack} />
      </Tab.Navigator>
    </NavigationContainer>

  );
}