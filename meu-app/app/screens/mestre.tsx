import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type tipoDaListaDeParametros = {
  mestre: undefined;
  detalhe: { id: number; nome: string; preco: number };
};

export default function PaginaMestra() {
  const navigation = useNavigation<NativeStackNavigationProp<tipoDaListaDeParametros>>();

  const handleNavigate = () => {
    const dado = { id: 123, nome: 'Produto X', preco: 199.99 };

    // Em React Native com React Navigation, passamos os parâmetros diretamente:
    navigation.navigate('detalhe', dado);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Página Mestra</Text>
      <TouchableOpacity style={styles.botao} onPress={handleNavigate}>
        <Text style={styles.textoBotao}>
          Ir para a página de Detalhes do Produto
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  titulo: {
    fontSize: 24,
    marginBottom: 16,
  },
  botao: {
    width: '100%',
    paddingVertical: 12,
    marginVertical: 12,
    borderRadius: 8,
    backgroundColor: '#1D4ED8', // azul-700 do Tailwind
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
  },
});