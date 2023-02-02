import {
  Text,
  TextInput,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

import LibraryBooks from './libraryData';
import { useState, useRef } from 'react';
import { Feather } from '@expo/vector-icons';

export default LibraryMain = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState(LibraryBooks);
  const searchRef = useRef();
  const onSearch = search => {
    if (search !== '') {
      let tempData = data.filter(item => {
        return item.title.toLowerCase().indexOf(search.toLowerCase()) > -1;
      });
      setData(tempData);
    } else {
      setData(LibraryBooks);
    }
  };

  const Book = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.bookContainer}
        onPress={() => {
          navigation.navigate('LibBookDetail', { item });
          onSearch('');
          setSearch('');
        }}>
        <Image source={{ uri: item.image }} style={styles.bookCover} />
        <Text style={styles.bookTitle}>
          {item.title}
          <Text style={styles.bookAuthor}>
            {'\nby '}
            {item.author}
          </Text>
        </Text>
      </TouchableOpacity>
    )
  }
  return (
    <FlatList
      style={{
        backgroundColor: '#F5F5DC',
      }}
      ListHeaderComponent={
        <View style={styles.container}>
          <Text style={styles.header}>Your Books</Text>
          <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
            <TextInput
              placeholder="Search.."
              placeholderTextColor={'#807F80'}
              value={search}
              ref={searchRef}
              onChangeText={txt => {
                onSearch(txt);
                setSearch(txt);
              }}
              style={styles.searchBar}
            />
            {search.length > 0 && (
              <TouchableOpacity
                onPress={() => {
                  setSearch("")
                  setData(LibraryBooks);
                }}
                style={{ alignSelf: "center", marginLeft:16, marginBottom: 7 }}
              >
                <Feather name='x-circle' size={30} />
              </TouchableOpacity>
            )}
          </View>
        </View>
      }
      data={data}
      renderItem={Book}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5F5DC',
    flex: 1,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 40,
    paddingTop: 20,
    paddingBottom: 10,
    textAlign: 'center',
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
  searchBar: {
    width: '83%',
    height: 40,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#8e8e8e',
    borderRadius: 7,
    marginTop: 10,
    paddingLeft: 20,
    marginBottom: 20,
    fontSize: 18,
  }
});
