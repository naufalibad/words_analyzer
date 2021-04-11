import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert} from 'react-native';


export default class App extends Component { 
  constructor(){
    super();
    this.state = {
      consonant_words_count: 0,
      vowels_words_count: 0,
      entered_words: '',
      entered_words_count: 0
    }
  }


  onPressAnalyze = () => {

    var words = this.state.entered_words.toString().split("");

    var vowel = this.state.entered_words.match(/[aeiou]/gi).length;

    var consonant = this.state.entered_words.split('').filter(e => e.match(/[^aeiou]/) != null).length;

    // Assign
    this.setState({
      entered_words_count: words.length ,
      vowel_words_count: vowel,
      consonant_words_count: consonant,
    })
  }

  render() {
    return (
    <View style={styles.container}>
      <Text style={styles.header}>Words Analyzer</Text>
      <TextInput style={styles.contents} onChangeText={(entered_words) => this.setState({entered_words})} placeholder='Input words here'/>
      <Button style={styles.button} color="#841584" onPress={() => this.onPressAnalyze()} title='Analyze this words'/>
      <Text style={styles.contents}>Quantity of Consonant: {this.state.consonant_words_count}</Text>
      <Text style={styles.contents}>Quantity of Vowel: {this.state.vowel_words_count}</Text>
    </View>
    );
    }
   }
  
   

   const styles = StyleSheet.create({ 
    container: {
      flex: 1,
      justifyContent: 'flex-start', 
      alignItems: 'center', 
      backgroundColor: '#A9BCF5',
    }, 
  
    header: {
      marginTop: 60,
      fontSize: 35, 
      textAlign: 'center', 
      margin: 10,
    },
    
    contents: {
      textAlign: 'center', 
      color: '#333333', 
    }, 
 })