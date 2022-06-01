import React from "react";
import { View , TouchableOpacity ,Text } from "react-native";
import styles from "./style";

export default function TelaInicial({navigation}){
    return( 
        <View style={styles.content}>
            <TouchableOpacity style={styles.buttons} onPress={() =>{ navigation.navigate("Pelada") }} >
                 <Text style={styles.textButton}>Pelada</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons}>
                 <Text style={styles.textButton}>Jogo contra</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons}>
                 <Text style={styles.textButton} >Últimas Sessões</Text>
            </TouchableOpacity>
        </View>
    );

}