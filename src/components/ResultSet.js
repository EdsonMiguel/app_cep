import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const resultSet = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Cep</Text>
      <Text style={styles.info}>{props.data.cep}</Text>

      <Text style={styles.label}>Cidade</Text>
      <Text style={styles.info}>{props.data.localidade} - {props.data.uf}</Text>

      <Text style={styles.label}>Logradouro</Text>
      <Text style={styles.info}>{props.data.logradouro ? props.data.logradouro : 'Informação indisponível'}</Text>

      <Text style={styles.label}>Complemento</Text>
      <Text style={styles.info}>{props.data.complemento ? props.data.complemento : 'Informação indisponível'}</Text>

      <Text style={styles.label}>Bairro:</Text>
      <Text style={styles.info}>{props.data.bairro ? props.data.bairro : 'Informação indisponível'}</Text>


      <Text style={styles.label}>DDD</Text>
      <Text style={styles.info}>{props.data.ddd}</Text>

      <Text style={styles.label}>Habitantes</Text>
      <Text style={styles.info}>{props.data.ibge}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop:15,
    backgroundColor:'#ccc',
    borderRadius:5,
    padding:10
  },
  label:{
    fontWeight:'bold',
    fontSize:16,
    color:'#555'
  },
  info:{
    marginBottom:10,
    marginLeft:5,
    fontSize:18
  }
})


export default resultSet;