import {
  Text,
  TextInput,
  Image,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import books from './storeData.js';
import BookDetail from './bookDetail';
const searchIcon = require('./assets/search-icon.png');
const Stack = createStackNavigator();

export default function StoreMain({ navigation }) {
  <NavigationContainer>
    <Stack.Navigator initialRouteName='StoreMain'>
      <Stack.Screen name="StoreMain" component={StoreMain} />
      <Stack.Screen name="Book" component={BookDetail} />
    </Stack.Navigator>
  </NavigationContainer>

  const Book = ({ item }) => (
    <TouchableOpacity
      style={styles.bookContainer}
      onPress={() => navigation.navigate('Book', { item })
      }>
      <Image source={{ uri: item.image }} style={styles.bookCover} />
      <Text style={styles.bookTitle}>
        {item.title}
        <Text style={styles.bookAuthor}>
          {'\nby '}
          {item.author}
        </Text>
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
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
                <Image source={searchIcon} style={styles.searchIcon} />
              </TouchableOpacity>
            </View>

          </>
        }
        data={books}
        renderItem={Book}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5F5DC',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 40,
    paddingTop: 20,
    paddingBottom: 10,
    textAlign: 'center',
  },
  searchBar: {
    alignItems: 'center',
    backgroundColor: 'white',
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
    flexDirection: 'row',
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
