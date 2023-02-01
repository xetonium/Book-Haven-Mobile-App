import {
  Text,
  TextInput,
  Image,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import StoreBooks from './storeData';
import { useState, useRef } from 'react';

export default function StoreMain({ navigation }) {
  const [search, setSearch] = useState('');
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(StoreBooks);
  const [selectedBook, setSelectedBook] = useState('');
  const searchRef = useRef();

  const onSearch = search => {
    if (search !== '') {
      let tempData = data.filter(item => {
        return item.title.toLowerCase().indexOf(search.toLowerCase()) > -1;
      });
      setData(tempData);
    } else {
      setData(StoreBooks);
    }
  };

  const Book = ({ item }) => (
    <TouchableOpacity
      style={styles.bookContainer}
      onPress={() => navigation.navigate('StoreBookDetail', { item })
      }>
      <Image source={{ uri: item.image }} style={styles.bookCover} />
      <Text style={styles.bookTitle}>
        {item.title}
        <Text style={styles.bookAuthor}>
          {'\nby '}
          {item.author}
        </Text>
        <Text style={{ fontSize: 20 }}>{'\n$'}{item.buy}</Text>
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <Text style={styles.header}>Store</Text>
            <View style={{ flex: 1 }}>
              <TouchableOpacity
                style={styles.searchBar}
                onPress={() => {
                  setClicked(!clicked);
                }}>
                <Text style={{ fontWeight: '600' }}>
                  {selectedBook == '' ? 'Search book by title...' : selectedBook}
                </Text>
              </TouchableOpacity>
              {clicked ? (
                <View style={styles.dropDownContainer}>
                  <TextInput
                    placeholder="Search.."
                    placeholderTextColor={'#807F80'}
                    value={search}
                    ref={searchRef}
                    onChangeText={txt => {
                      onSearch(txt);
                      setSearch(txt);
                    }}
                    style={styles.dropDown}
                  />

                  <FlatList
                    data={data}
                    renderItem={({ item }) => {
                      return (
                        <TouchableOpacity
                          style={{
                            width: '85%',
                            alignSelf: 'center',
                            height: 50,
                            justifyContent: 'center',
                            borderBottomWidth: 0.5,
                            borderColor: '#8e8e8e',
                          }}
                          onPress={() => {
                            navigation.navigate('StoreBookDetail', { item });
                            setSelectedBook(item.title);
                            setClicked(!clicked);
                            onSearch('');
                            setSearch('');
                          }}>
                          <Text style={{ fontWeight: '600' }}>{item.title}</Text>
                        </TouchableOpacity>
                      );
                    }}
                  />
                </View>
              ) : null}
            </View>
          </>
        }
        data={StoreBooks}
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
  searchBar: {
    width: '90%',
    height: 40,
    borderRadius: 10,
    borderWidth: 0.5,
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 15,
  },
  dropDownContainer: {
    elevation: 20,
    height: 640,
    alignSelf: 'center',
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
  },
  dropDown: {
    width: '90%',
    height: 50,
    alignSelf: 'center',
    borderWidth: 0.2,
    borderColor: '#8e8e8e',
    borderRadius: 7,
    marginTop: 10,
    paddingLeft: 20,
  }
});
