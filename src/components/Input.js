import React from 'react';
import { TextInput, StyleSheet } from 'react-native';


const input = (props) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={props.placeholder}
      value={props.value}
      onChangeText={props.onChangeText}
      keyboardType="number-pad"
    />
  )
}


const styles = StyleSheet.create({
  input:{
    backgroundColor:'#fff',
    borderWidth:1,
    borderColor: '#aaa',
    borderRadius:5,
    padding:10,
    width:'90%'
  },
})

export default input;