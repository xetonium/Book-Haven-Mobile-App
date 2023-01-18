import {
  Text,
  TextInput,
  Image,
  View,
  ScrollView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import books from './storeData.js';

export default function StoreMain() {
  const Book = ({ title, image, author }) => (
    <TouchableOpacity
      style={styles.bookContainer}
      onPress={() => {
        Alert.alert(title, author);
      }}>
      <Image source={{ uri: image }} style={styles.bookCover} />
      <Text style={styles.bookTitle}>
        {title}
        <Text style={styles.bookAuthor}>
          {'\nby '}
          {author}
        </Text>
      </Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Store</Text>
      <View style={{ flexDirection: 'row' }}>
        <TextInput
          style={styles.searchBar}
          placeholder="search by title or author"
          placeholderTextColor={'#807f80'}
        />

        <TouchableOpacity
          onPress={() => {
            Alert.alert('Loading...');
          }}>
          <Image
            source={require('./assets/search-icon.png')}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={books}
        renderItem={({ item }) => (
          <Book title={item.title} image={item.image} author={item.author} />
        )}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5F5DC',
    paddingBottom: 50,
  },

  header: {
    fontWeight: 'bold',
    fontSize: 40,
    fontFamily: 'Trebuchet MS',
    paddingTop: 20,
    paddingBottom: 10,
    textAlign: 'center',
  },

  searchBar: {
    alignItems: 'center',
    backgroundColor: 'white',
    fontFamily: 'Trebuchet MS',
    fontWeight: 'bold',
    fontSize: 17,
    borderRadius: 5,
    borderWidth: 1,
    width: 320,
    marginRight: 15,
    marginLeft: 10,
    marginBottom: 20,
    padding: 10,
  },

  searchIcon: {
    height: 35,
    width: 35,
    flexDirection: 'horizontal',
  },

  bookContainer: {
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    borderWidth: 1,
    padding: 5,
  },

  bookCover: {
    width: 150,
    height: 225,
  },

  bookTitle: {
    fontSize: 20,
    paddingLeft: 10,
    maxWidth: 200,
  },

  bookAuthor: {
    fontStyle: 'italic',
    fontSize: 16,
  },
});