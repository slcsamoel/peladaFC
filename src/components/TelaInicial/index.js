import React from "react";
import { View , TouchableOpacity ,Text } from "react-native";
import styles from "./style";

export default function TelaInicial(){
    return( 
        <View style={styles.content}>
            <TouchableOpacity style={styles.buttons} >
                 <Text style={styles.textButton}>NOVO JOGO</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons}>
                 <Text style={styles.textButton}>ÚLTIMAS SESSÕES</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons}>
                 <Text style={styles.textButton} >LIGA AMADORA</Text>
            </TouchableOpacity>
        </View>
    );

}