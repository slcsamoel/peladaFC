import { StyleSheet } from "react-native";


const styles = StyleSheet.create({

      main:{
        flex: 1,
        //justifyContent: 'center',
       // alignItems: 'center',
        margin: 2,


      }, 
      content:{  
            flex: 1,
            height: '50%',
        },

        sectionsForms:{
            flex: 0,
            marginBottom: 0,
            backgroundColor: "#3498DB",
            borderRadius: 10,
            margin: 5,
            padding: 5,
        },

        listaDeJogadores:{
            flex: 0,
            marginBottom: 10,
            backgroundColor: "#3498DB",
            borderRadius: 10,
            margin: 5,
            padding: 10,
            maxHeight: '60%'
        },

        tituloLista:{
            fontSize: 22,
            fontWeight: 'bold',
            alignItems:'center',
            margin: 5,
            color: "#FDFEFE",
            marginBottom: 10,
            justifyContent: 'center',
            textAlign: 'center'
        },

        formLabel:{
            fontSize: 16,
            fontWeight: 'bold',
            alignItems:'center',
            margin: 5,
            color: "#FDFEFE",
            marginBottom: 0,
        },


        listConfig:{

        },

        imputItemConfig:{
            fontSize: 14,
            width:"80%",
            borderRadius: 5,
            backgroundColor: "#00FFFF",
            height: 40 ,
            margin: 10 ,
            marginBottom: 2,
        },  

        inputSection:{
            fontSize: 14,
            width:"90%",
            borderRadius: 5 ,
            backgroundColor: "#00FFFF",
            height: 40 ,
            margin: 10 ,
            marginBottom: 2,
        },

        inputQtdJogadores:{
            fontSize: 14,
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
            fontWeight: 'bold',
            color: "#FDFEFE",
        }

});


export default styles