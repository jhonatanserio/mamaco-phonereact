import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet} from 'react-native';

import { Audio } from 'expo-av';


export default class PhonicShoundButton extends React.Component{
  //5. copiar a Url de som da atividade 2 e concaternar com o fornema, escrever função asincrona
  playSound = async(soundChunk) =>{
    var soundLink = 'https://s3-whitehatjrcontent.whjr.online/phones/' + soundChunk +'.mp3';
    await Audio.Sound.createAsync(
      {
        uri: soundLink,
      },
      {shouldPlay: true}
    );

  };

//4.2 escrever o metodo render para esse componente com o botao TO
  //passar estilo do botao de mapeamento das silabas 
  render(){
    return(
    
      <TouchableOpacity 
       style={styles.chunkButton}
        onPress={() => {
          this.playSound(this.props.soundChunk);

        }}>
        <Text style={styles.displayText}> {this.props.wordChunk}</Text>
      </TouchableOpacity>
    );
  }
  
}

const styles = StyleSheet.create({
  displayText:{
    textAlign: 'center',
    fontSize:30,
    color:'white',
  },

  chunkButton:{
   width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 5,
    backgroundColor: '#8B4513',
  }

});