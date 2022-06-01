import React from 'react'
import { View, Text , TouchableOpacity } from 'react-native';

import styles from "./style";

export default function ListaJogadores({data}) {
  return (
    <TouchableOpacity style={styles.container}>
        <View style={styles.content}>
            <Text style={styles.label}>{data.nome}</Text>
        </View>
   </TouchableOpacity>
  )
}