import { StyleSheet } from "react-native";


const styles = StyleSheet.create({

    container:{
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: "#DADADA",
    },

    content:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5 ,
        borderColor: '#ccc'

    },

    label:{
        fontWeight: 'bold',
        fontSize: 16,
    },

});


export default styles