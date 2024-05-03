import { ThemeProvider } from '@rneui/themed';
import theme from './styling/theme';
import NavigationBar from './components/NavigationBar';
import { createShoppingListDB } from './databases+apis/shoppinglistDB';
import { createSavedRecipesDB, dropSavedRecipesDB } from './databases+apis/savedRecipesDB';
import { useEffect } from 'react';

export default function App() {

  useEffect(() => {
    createShoppingListDB();
    //dropSavedRecipesDB();
    createSavedRecipesDB();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <NavigationBar />
    </ThemeProvider>
  );
}