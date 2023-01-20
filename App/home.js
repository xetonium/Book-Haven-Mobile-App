import {
  Text,
  ScrollView,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import storeBooks from './storeData.js';
import libraryBooks from './libraryData.js';

export default Home = ({ navigation }) => {
  const Book = ({ title, image, author }) => (
    <TouchableOpacity
      onPress={() => {
        Alert.alert(title, author);
      }}>
      <Image source={{ uri: image }} style={styles.book} />
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Welcome Back</Text>
      <Text style={styles.subHeader}>pick up from where you left off</Text>
      <ScrollView horizontal={true} style={styles.bookContainer}>
        <FlatList
          horizontal={true}
          data={libraryBooks.slice(0, 3)}
          renderItem={({ item }) => (
            <Book title={item.title} image={item.image} author={item.author}/>
          )}
          keyExtractor={(item) => item.id}
        />
        <View style={styles.arrowView}>
          <TouchableOpacity onPress={() => navigation.navigate('Library')}>
            <Image
              source={require('./assets/arrow-right.png')}
              style={styles.arrowImage}
            />
            <Text style={styles.seeAllText}>see all</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Text style={styles.subHeader}>popular picks for you</Text>
      <ScrollView horizontal={true} style={styles.bookContainer}>
        <FlatList
          horizontal={true}
          data={storeBooks.slice(0, 3)}
          renderItem={({ item }) => (
            <Book title={item.title} image={item.image} author={item.author}/>
          )}
          keyExtractor={(item) => item.id}
        />
        <View style={styles.arrowView}>
          <TouchableOpacity onPress={() => navigation.navigate('Store')}>
            <Image
              source={require('./assets/arrow-right.png')}
              style={styles.arrowImage}
            />
            <Text style={styles.seeAllText}>see all</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5DC',
  },

  header: {
    fontSize: 40,
    fontFamily: 'Trebuchet MS',
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 41,
    marginRight: 41,
    paddingTop: 20,
    paddingBottom: 30,
  },

  subHeader: {
    fontSize: 22,
    fontFamily: 'Trebuchet MS',
    fontWeight: 'bold',
    marginLeft: 10,
    paddingBottom: 25,
  },

  bookContainer: {
    flexDirection: 'row',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    marginBottom: 50,
  },

  book: {
    marginRight: 20,
    width: 200,
    height: 300,
  },

  arrowImage: {
    width: 50,
    height: 50,
  },

  seeAllText: {
    textAlign: 'center',
    fontSize: 20,
  },

  arrowView: {
    justifyContent: 'center',
    marginRight: 10,
    textDecorationLine: 'underline',
  },
});