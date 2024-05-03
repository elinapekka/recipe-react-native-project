import { createTheme } from '@rneui/themed';
import colors from './colors';

const theme = createTheme({
  /*
  lightColors: {
    tertiary: '#124789',
    accent: '#f98652',
    surface: '#0990763',
  },
  darkColors: {
    tertiary: '#124789',
    accent: '#908652',
    surface: '#0990763',
  },
  */
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
    FAB: {
      buttonStyle: {
        backgroundColor: '#EDB41F'
      },
    },
    Button: {
      color: '#60AC98'
    }
  },
});

export default theme;