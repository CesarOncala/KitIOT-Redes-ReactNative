import React from 'react'
import { Text, StyleSheet } from 'react-native'

export default function Texto({ children,style }) {

    let estilo = styles.text;

    if(style?.fontWeight === 'bold')
        estilo = styles.textoNegrito

    return <Text style={[estilo,style]}> {children} </Text>
}


const styles = StyleSheet.create({

    text: {
        fontFamily: 'Montserrat_400Regular' ,
        fontWeight:'normal',
    },
    textoNegrito:{
        fontFamily:'Montserrat_700Bold',
        fontWeight:'normal',
    }

})