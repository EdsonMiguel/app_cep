import React from 'react';
import { Text, StyleSheet} from 'react-native';


const components = (props) => {
  return <Text style={styles.header}>{props.title}</Text>;
}

const styles = StyleSheet.create({
  header:{
    marginTop:30,
    margin: 25,
    fontSize:20,
    fontWeight:'bold'
  }
})

export default components;