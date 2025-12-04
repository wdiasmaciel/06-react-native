import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type tipoDaListaDeParametros = {
  mestre: undefined;
  detalhe: { id: number; nome: string; preco: number };
};

export default function PaginaDeDetalhe() {
  const route = useRoute();
  const navigation = useNavigation<NativeStackNavigationProp<tipoDaListaDeParametros>>();

  // Parâmetros recebidos via navigation.navigate('detalhe', params)
  const { id, nome, preco } = (route.params as { id: number; nome: string; preco: number }) || {};

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Página de Detalhes</Text>

      {id && nome && preco ? (
        <Text style={styles.detalhe}>
          Exibindo detalhes para: ID {id}, Nome: {nome}, Preço: {preco}
        </Text>
      ) : (
        <Text style={styles.detalhe}>Nenhum dado de produto encontrado.</Text>
      )}

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('mestre')}
      >
        <Text style={styles.textoBotao}>Voltar para a Página Mestra</Text>
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
  detalhe: {
    width: '100%',
    padding: 12,
    marginVertical: 12,
    borderRadius: 8,
    backgroundColor: '#EF4444', // vermelho-500 do Tailwind
    color: '#fff',
    fontSize: 16,
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