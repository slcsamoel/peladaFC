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
           const [qtdPorTimes , setQtdPorTimes] = useState(null);
           const [tempo , setTempo] = useState(null);
           const [numGol , setNumGol] = useState(null);


      function novoJogador(){
          setListPlayers((arr)=> [...arr , {id: new Date().getTime(), nome: newJogador}]);
          setNewJogador('');
      }     

  return (
     <View style={styles.main}>
        <View  horizontal={false} style={styles.content}>
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
                                        onChangeText={setQtdPorTimes} 
                                        value={qtdPorTimes}
                                        placeholder="Ex: 6"
                                        keyboardType='numeric'  
                                    /> 
                            </View>      

                            <View style={styles.itemConfig}>
                            <Text style={styles.formLabel} >Tempo:</Text>
                                <TextInput
                                    style={styles.imputItemConfig}
                                    onChangeText={setTempo} 
                                    value={tempo}
                                    placeholder="Ex: 10"  
                                    keyboardType='numeric'
                                />    
                            </View>    

                            <View style={styles.itemConfig}>
                            <Text style={styles.formLabel} >Gols:</Text>
                                <TextInput
                                    style={styles.imputItemConfig}
                                    onChangeText={setNumGol} 
                                    value={numGol}
                                    placeholder="Ex: 2"
                                    keyboardType='numeric'  
                                />
                            </View>
                        </ScrollView>            

                        <Text style={styles.formLabel} >Incluir Jogador:</Text>   
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


                <View style={styles.listaDeJogadores}> 

                    <Text style={styles.tituloLista}>Jogadores</Text>                

                    {listPlayers.length > 0 ? 
                        <FlatList
                            data={listPlayers}
                            keyExtractor={(item) => String(item.id)}
                            showsVerticalScrollIndicator = {false}
                            renderItem = {({item}) => { return( <ListaJogadores data={item} />)}}
                        />
                    : <View/> }
                </View>
            

        </View>
    </View>         
            
  )
}