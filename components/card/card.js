import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Definindo o componente
const Card = (cep, logradouro) => {
  return (
    <View style={styles.card}>
        <Text>Cep: {cep}</Text>
        <Text>Logradouro: {logradouro}</Text>
        <Text>Logradouro: {logradouro}</Text>
        <Text>Logradouro: {logradouro}</Text>
        <Text>Logradouro: {logradouro}</Text>
        <Text>Logradouro: {logradouro}</Text>

        
      <TouchableOpacity style={styles.buttonBuscar} > 
        <Text style={styles.textButtonBuscar}>NovaBusca</Text>    
      </TouchableOpacity>
      
      </View>


  );
};

const styles = StyleSheet.create({
    
  card: {
    marginTop: 40,
    alignSelf: "center",
    padding: 10,
    marginLeft: 10,
    display: "flex",
    height: 160,
    width: 260,
    backgroundColor: "#f6f3f3",
    borderRadius: 10,
    borderWidth: 1,
    fontSize: 40,
  }});
  

export default Card;
