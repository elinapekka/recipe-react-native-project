import { StyleSheet } from 'react-native';


const viewStyles = StyleSheet.create({
    rowView: {
        flexDirection: 'row', 
        width: '100%', 
        alignItems: 'center', 
        alignContent: 'center'
    },
})

const textStyles = StyleSheet.create({
    titles: {
        marginTop:"auto", 
        marginBottom:"auto", 
        marginLeft: "auto", 
        width: "80%", 
        textAlign: "left",
        fontSize: 20,
    }
});
  

export { viewStyles, textStyles}