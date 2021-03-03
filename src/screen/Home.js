import React, {useState} from 'react';
import { View, StyleSheet, SafeAreaView, Alert, Keyboard } from 'react-native';
import Button from '../components/Button'
import ResultSet from '../components/ResultSet';
import Input from '../components/Input';
import Header from '../components/Header';
import callApi from '../services/callApi';

const App = () =>{

  const [cep, setCep] = useState('');
  const [cepInfo, setCepInfo] = useState(null)

  const clean = () =>{
    setCep('');
    setCepInfo(null)
  }

  const search = async () =>{
     if(cep === '')
     return;

     try{
      const response = await callApi.get(`${cep}/json`);
      setCepInfo(response.data);
      Keyboard.dismiss()
     }
     catch(error){
       Alert.alert('Cep invalido')
     }
  }


  return(
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <Header title="Informe o CEP desejado:"/>
        <Input
          placeholder='Ex: 18650000'
          value={cep}
          onChangeText={(text)=>setCep(text)}
        />
      </View>

      <View style={styles.buttons}>
        <Button
          label="Pesquisar"
          perform={search}
          backgroundColor="#4287f5"
        />
        <Button
          label="Limpar"
          perform={clean}
          backgroundColor="#22ff00"
        />
      </View>

      <View style={styles.infos}>
      {
        cepInfo &&
        <ResultSet data={cepInfo}/>
      }
      </View>

    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  header:{
      justifyContent:'center',
      alignItems:'center',
  },
  buttons:{
    marginTop:15,
    padding:10,
    flexDirection:'row',
    justifyContent:'space-around'
  },
  infos:{
    margin:20,
    borderTopWidth: 2,
    borderColor: '#aaa',
    flex:1,
    padding:10
  },
})

export default App;