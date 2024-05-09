import { createTheme } from '@rneui/themed';

const colors = {
  backgroundColor: 'beige',
  primary: 'red',
  accent1: '#EDB41F',
  accent2: '#60AC98',
  secondary: 'pink',
  textColor: 'white',
  iconColor: 'white',
}

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
        // backgroundColor: 'blue',
        padding: 5,
        paddingBottom: 0,
        margin: 0,
      },
      containerStyle: {
        padding: 10,
        margin: 0,
      },
    },
    FAB: {
      buttonStyle: {
        backgroundColor: colors.accent1,
      },
    },
    Button: {
      color: colors.accent2
    }
  },
});

export default theme;