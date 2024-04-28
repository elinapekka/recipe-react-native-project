import { createTheme } from '@rneui/themed';
import colors from './colors';

const theme = createTheme({
    components: {
      Text: {
        h1Style: {
          fontSize: 30,
          fontWeight: 'bold',
          width: '80%',
          margin: 10,
        },
        h2Style: {
          fontSize: 25,
          margin: 10,
        },
        h3Style: {
          fontSize: 20,
          margin: 0,
          fontWeight: 'bold',
        }
      },
      Card: {
        wrapperStyle: {
          //backgroundColor: 'blue',
          padding: 5,
          paddingBottom: 0,
          margin: 0,
        },
        containerStyle: {
          padding: 10,
          margin: 0
        },
      },

      ListItem: {
        Swipeable: {
          
        },
        variants: {
          biggerRecipeSearch: {
            containerStyle: {
              backgroundColor: colors.backgroundColor,
            },
          }
        },
      },

      SearchBar: { // https://reactnativeelements.com/docs/components/searchbar
        containerStyle: {
          backgroundColor: colors.secondary,
          margin: 0,
        },
        inputContainerStyle: {
          backgroundColor: colors.primary,
          margin: 0,
        },
        inputStyle: {
          color: colors.textColor,
        },
        placeholderTextColor: colors.textColor,
        rightIconContainerStyle: {
          color: colors.iconColor,
        },
        searchIcon: {
          color: colors.iconColor,
        },
        clearIcon: {
          color: colors.iconColor,
        },
      },
    },
});

export default theme;