import React , { useState } from 'react';
import { View, Text , TextInput , TouchableOpacity , Pressable , Keyboard , ScrollView , FlatList } from 'react-native';
import styles from "./style";
import ListaJogadores from '../../componentes/ListaJogadores';

const list = [
    {
        id: 1 ,
        nome: 'Jogador 1',
    },
    {
        id: 2 ,
        nome: 'Jogador 2',
    },
]   


export default function Pelada() {
           const [sectionName , setSectionName] = useState('');
           const [qtdJogadores , setQtdJogadores] = useState(null);
           const [ newJogador  , setNewJogador ] = useState('');
           const [listPlayers , setListPlayers] = useState([]);


      function novoJogador(){
          setListPlayers((arr)=> [...arr , {id: new Date().getTime(), nome: newJogador}]);
          setNewJogador('');
      }     

  return (
    <ScrollView  horizontal={false} style={styles.content}>
            <Pressable onPress={Keyboard.dismiss} style={styles.sectionsForms}>
                    <Text style={styles.formLabel} >Nome da sessão:</Text>
                        <TextInput
                            style={styles.inputSection}
                            onChangeText={setSectionName} 
                            value={sectionName}
                            placeholder="Ex: Pelada de quarta..."  
                        />    

                    <ScrollView style={styles.listConfig} horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles.itemConfig}>     
                            <Text style={styles.formLabel} >Qtd por times:</Text>
                                <TextInput
                                    style={styles.imputItemConfig}
                                    onChangeText={setSectionName} 
                                    value={sectionName}
                                    placeholder="Ex: 6"  
                                /> 
                        </View>      

                        <View style={styles.itemConfig}>
                        <Text style={styles.formLabel} >Tempo:</Text>
                            <TextInput
                                style={styles.imputItemConfig}
                                onChangeText={setSectionName} 
                                value={sectionName}
                                placeholder="Ex: 10"  
                            />    
                        </View>    

                        <View style={styles.itemConfig}>
                        <Text style={styles.formLabel} >Gols:</Text>
                            <TextInput
                                style={styles.imputItemConfig}
                                onChangeText={setSectionName} 
                                value={sectionName}
                                placeholder="Ex: 2"  
                            />
                        </View>
                    </ScrollView>            

                     <Text style={styles.formLabel} >Jogadores:</Text>   
                    <View style={styles.divIncluirJogadores}> 
                            <TextInput
                                style={styles.incluirJogadores}
                                onChangeText={setNewJogador} 
                                value={newJogador}
                                placeholder="Ex: Samoel costa ..."  
                            /> 

                            <TouchableOpacity
                                style={styles.buttonIncluirJogador}
                                onPress={()=>{
                                    novoJogador()
                                 }}    
                            >

                              <Text style={styles.textBtnIncluir}>Incluir</Text>                  

                            </TouchableOpacity>

                    </View>
            </Pressable>

           {listPlayers.length > 0 ? 
            <FlatList
                style={styles.listaDeJogadores}
                data={listPlayers}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator = {false}
                renderItem = {({item}) => { return( <ListaJogadores data={item} />)}}
            />
          : <View/> }

    </ScrollView>
  )
}