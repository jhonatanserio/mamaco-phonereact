import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  //1. importar imagem para adicionar ao app
  Image
}  from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import db from './localdb';
//1. importando o coponente de som
import PhonicSoundButton from './components/PhonicSoundButton'




export default class App extends React.Component {
  constructor() {
 //1. adicionar estado phonicSounds
    super();
      this.state = {
        text: '',
        chunks: [],
        phonicSounds: [],

      };
  }
  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <Header
            backgroundColor={'#9c8210'}
            centerComponent={{
              text: 'Macaquinho fofo',
              style: { color: '#fff', fontSize: 20 },
            }}
          />

          <Image 
        
          style={styles.imageIcon}
          source={{uri: 
          'https://uploads.spiritfanfiction.com/historias/capas/202105/marco-o-macaco-22391594-290520212030.jpg'}}
          />
          <TextInput
            style={styles.inputBox}
            onChangeText={(text) => {
              this.setState({ text: text });
            }}
            value={this.state.text}
          />
          
          <TouchableOpacity
            style={styles.goButton}
            onPress={() => {
              this.setState({chunks: db[this.state.text].chunks});
              //2. adicionar um novo estado para o sons - mapeamento dos pedaços de palavras
              this.setState({phonicSounds: db[this.state.text].phones});
            }}>
              <Text style={styles.buttonText}>IR</Text>
           </TouchableOpacity>

  
      <View>
      {/*3. adicionar um parâmentro de indice*/}
         {/* 4. substituir o touchable pelo PhonicButton e chamar  */}
          {/* 4.1 como esse componente ainda não existe até aqui ficara dando erro, por crie um novo arquivo com o componete */}
        {this.state.chunks.map((item, index)=> {
        return(
       
          <PhonicSoundButton 
          wordChunk={this.state.chunks[index]}
          soundChunk={this.state.phonicSounds[index]}
          />
        
        );
          
         })}

      </View>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox: {
    /*1.3Ajustar margem do input */
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },

/*1.2 Passar estilo da imagem */
  imageIcon:{
    width: 150,
    height: 150,
    marginLeft: 95,
  },

  /*passar os estilos para as palavras divididas 
   displayText: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
  },

  chunkButton: {
    width: '60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    margin: 5,
    backgroundColor: '#8B4513',
  },*/

});
