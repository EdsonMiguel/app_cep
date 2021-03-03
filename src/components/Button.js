import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


const Button = (props) => {
  return (
    <TouchableOpacity 
          style={[styles.button, {backgroundColor: props.backgroundColor}]}
          onPress={props.perform}
        >
          <Text style={styles.label}>{props.label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button:{
    width:150,
    paddingHorizontal:20,
    paddingVertical:10,
    borderRadius:5,
  },
  label:{
    color:'#fff',
    textAlign:'center',
    fontSize:16,
  }
})

export default Button;



