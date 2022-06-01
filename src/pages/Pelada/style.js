import { StyleSheet } from "react-native";


const styles = StyleSheet.create({

      content:{  
            //justifyContent: 'center',
        },

        sectionsForms:{

        },

        formLabel:{
            fontSize: 14,
            fontWeight: 'bold',
            alignItems:'center',
            margin: 10,
            marginBottom: 2,
        },


        listConfig:{
        },

        imputItemConfig:{
            width:"80%",
            borderRadius: 5,
            backgroundColor: "#00FFFF",
            height: 40 ,
            margin: 10 ,
            marginBottom: 2,
        },  

        inputSection:{
            width:"90%",
            borderRadius: 5 ,
            backgroundColor: "#00FFFF",
            height: 40 ,
            margin: 10 ,
            marginBottom: 2,
        },

        inputQtdJogadores:{
            width:"20%",
            borderRadius: 5 ,
            backgroundColor: "#00FFFF",
            height: 40 ,
            margin: 10 ,
            marginBottom: 2,
        }, 

        divIncluirJogadores:{
            flexDirection: 'row',
            width: '100%',
            justifyContent:'space-between'
        },

        incluirJogadores:{
            width:"70%",
            borderRadius: 5 ,
            backgroundColor: "#00FFFF",
            height: 40 ,
            margin: 10 ,
            marginBottom: 2,
        },

        buttonIncluirJogador:{
            width: '20%',
            height: 40 ,
            margin: 10,
            backgroundColor: '#F92e6A',
            borderRadius: 10 ,
            justifyContent: 'center',
            alignItems: 'center',
        },

        textBtnIncluir:{
            fontSize: 16,
            fontWeight: 'bold'
        }

});


export default styles