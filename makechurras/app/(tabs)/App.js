import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);
  const [criancas, setCriancas] = useState(0);
  const [carneBovina, setCarneBovina] = useState(0);
  const [frango, setFrango] = useState(0);
  const [linguica, setLinguica] = useState(0);
  const [refrigerante, setRefrigerante] = useState(0);
  const [cerveja, setCerveja] = useState(0);
  const [hnaobebe, setHnaobebe] = useState(0);
  const [mnaobebe, setMnaobebe] = useState(0);
 
  const calcular = () => {
    const totalCarneBovina = homens * 0.3 + mulheres * 0.2 + criancas * 0.1;
    const totalFrango = homens * 0.2 + mulheres * 0.15 + criancas * 0.1;
    const totalLinguica = homens * 0.1 + mulheres * 0.1 + criancas * 0.05;
    const totalRefrigerante = ( criancas + hnaobebe + mnaobebe) * 0.5;
    const totalCerveja = homens * 1.2 + mulheres * 0.6 - hnaobebe * 1.2 - mnaobebe * 0.6;
    

    setCarneBovina(totalCarneBovina.toFixed(1));
    setFrango(totalFrango.toFixed(1));
    setLinguica(totalLinguica.toFixed(1));
    setRefrigerante(totalRefrigerante.toFixed(1));
    setCerveja(totalCerveja.toFixed(1));
  };

  const handleInput = (setter) => (text) => {
    const value = parseInt(text);
    if (!isNaN(value) && value >= 0) {
      setter(value);
    } else {
      setter(0);
    }
  };

  const increment = (setter, value) => () => {
    setter(value + 1);
  };

  const decrement = (setter, value) => () => {
    if (value > 0) {
      setter(value - 1);
    }
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.borderTop} />
      <View style={styles.borderBottom} />
      <View style={styles.borderLeft} />
      <View style={styles.borderRight} />
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={require('../../assets/logos/logo1teste.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Calcule seu Churrasco</Text>
        
        <View style={styles.inputPessoa}>
          <Text style={styles.textonome}>Homens:</Text>
          <TouchableOpacity style={styles.button} onPress={decrement(setHomens, homens)}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={homens.toString()}
            onChangeText={handleInput(setHomens)}
          />
          <TouchableOpacity style={styles.button} onPress={increment(setHomens, homens)}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>

        </View>
        
        <View style={styles.inputPessoa}>
          <Text style={styles.textonome}>Mulheres:</Text>
          <TouchableOpacity style={styles.button} onPress={decrement(setMulheres, mulheres)}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={mulheres.toString()}
            onChangeText={handleInput(setMulheres)}
          />
          <TouchableOpacity style={styles.button} onPress={increment(setMulheres, mulheres)}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.inputPessoa}>
          <Text style={styles.textonome}>Crianças:</Text>
          <TouchableOpacity style={styles.button} onPress={decrement(setCriancas, criancas)}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={criancas.toString()}
            onChangeText={handleInput(setCriancas)}
          />
          <TouchableOpacity style={styles.button} onPress={increment(setCriancas, criancas)}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
         
        <View>
        
        <Text style={styles.textonome}>Quantidade de quem não bebe:</Text>

        <Text style={styles.textonome}>Homens:</Text>
        <TouchableOpacity style={styles.button}>
                   <Text style={styles.buttonText} onPress={decrement(setHnaobebe, hnaobebe)}>-</Text>
               </TouchableOpacity>
             <TextInput 
              style={styles.input}
              keyboardType="numeric"
              value={hnaobebe.toString()}
              onChangeText={handleInput(setHnaobebe)}></TextInput>
              <TouchableOpacity style={styles.button}>
               <Text style={styles.buttonText} onPress={increment(setHnaobebe, hnaobebe)}>+</Text>
              </TouchableOpacity>
                
               
            <View>
            <Text style={styles.textonome}>Mulheres:</Text>
            <TouchableOpacity style={styles.button}>
                   <Text style={styles.buttonText} onPress={decrement(setMnaobebe, mnaobebe)}>-</Text>
               </TouchableOpacity>
             <TextInput style={styles.input}
              keyboardType="numeric"
              value={mnaobebe.toString()}
              onChangeText={handleInput(setMnaobebe)}
              ></TextInput>
              <TouchableOpacity style={styles.button}>
               <Text style={styles.buttonText} onPress={increment(setMnaobebe, mnaobebe)}>+</Text>
              </TouchableOpacity>
               
            </View>

          </View>

      
        <TouchableOpacity style={styles.customButton} onPress={calcular}>
          <Text style={styles.customButtonText}>Calcular</Text>
        </TouchableOpacity>
        
        <View style={styles.resultado}>
          <Text style={styles.subtitle}>Quantidade necessária:</Text>
          <View style={styles.borda}>
            <Text style={styles.textos}>{carneBovina} Kg de Carne Bovina</Text>
            <Text style={styles.textos}>{frango} Kg de Frango</Text>
            <Text style={styles.textos}>{linguica} Kg de Linguiça</Text>
            <Text style={styles.textos}>{refrigerante} L de Refrigerante</Text>
            <Text style={styles.textos}>{cerveja} L de Cerveja</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#C61010',
  },
  borderTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 10,
    backgroundColor: '#D0905B',
    zIndex: 1,
  },
  borderBottom: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 10,
    backgroundColor: '#D0905B',
    zIndex: 1,
  },
  borderLeft: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: 10,
    backgroundColor: '#623C1D',
    zIndex: 1,
  },
  borderRight: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    width: 10,
    backgroundColor: '#623C1D',
    zIndex: 1,
  },
  container: {
    alignItems: 'center',
    paddingTop: 70, // ajuste este valor conforme necessário para a distância do topo
    paddingBottom: 70, // ajuste este valor conforme necessário para a distância do fundo
  },
  logo: {
    width: 200, // ajuste conforme necessário
    height: 200, // ajuste conforme necessário
    marginTop: -20, // ajuste negativo para mover o logo para cima
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 20,
  },
  inputPessoa: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  textonome: {
    fontSize: 20,
    color: 'white',
  },
  input: {
    backgroundColor: 'white',
    borderWidth: 5,
    borderColor: '#D0905B',
    padding: 8,
    marginHorizontal: 5,
    width: 50,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#3383F4',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  customButton: {
    backgroundColor: '#3383F4',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  customButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultado: {
    marginTop: 20,
  },
  subtitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textos: {
    color: 'white',
    
    
  },
  borda: {
    borderColor: 'white',
    borderWidth: 5,
    width: 250,
    backgroundColor: '#D0905B',
    height: 150,
    padding: 20,
    alignItems: 'center'
  },
});
