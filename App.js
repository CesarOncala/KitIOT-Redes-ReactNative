import { FlatList, View, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import Detalhes from './source/telas/Carrinho/detalhes.js';
import Topo from './source/telas/Carrinho/topo.js';
import { useFonts, Montserrat_700Bold, Montserrat_400Regular } from '@expo-google-fonts/montserrat'
import Mocks from './source/mocks/carrinho.js'
import Item from './source/telas/Carrinho/item.js';
import Texto from './source/components/Texto.js';


export default function App() {

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  })

  if (!fontsLoaded) {
    return <View></View>
  }

  return (
    <SafeAreaView style={styles.container}>


      <FlatList
        data={Mocks.itens.lista}
        renderItem={Item}
        keyExtractor={(nome) => nome}
        ListHeaderComponent={

          () => {
            return <>

              <Topo {...Mocks.topo} />
              <Detalhes {...Mocks.detalhes} />

              <Texto style={styles.titulo}>
                {Mocks.itens.titulo}
              </Texto>
            </>
          }

        }
        ListFooterComponent={
          () => {

            return <>

              <Texto style={styles.titulo}>{Mocks.itens2.titulo}</Texto>
              
              <FlatList
                data={Mocks.itens2.lista}
                renderItem={Item}
                keyExtractor={(nome) => nome}
              ></FlatList>

            </>
          }
        }
      >
      </FlatList>


      <StatusBar />

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titulo: {
    color: '#ffa500',
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 30,
    fontSize: 25
  },
})