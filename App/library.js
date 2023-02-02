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
import { AntDesign } from '@expo/vector-icons';

export default LibraryMain = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [clicked, setClicked] = useState(false);
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
        onPress={() => navigation.navigate('LibBookDetail', { item })
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
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <Text style={styles.header}>Your Books</Text>
            <View style={{ flex: 1 }}>
              <Text style={{ marginLeft: 20, fontSize: 20, }}>Search by title:</Text>
              <TouchableOpacity
                style={styles.searchBar}
                onPress={() => {
                  setClicked(!clicked);
                }}>
                {clicked ? (
                  <View style={{ flexDirection: 'row' }}>
                    <TextInput
                      placeholder="Search..."
                      placeholderTextColor={'#807F80'}
                      value={search}
                      ref={searchRef}
                      onChangeText={txt => {
                        onSearch(txt);
                        setSearch(txt);
                      }}
                      style={styles.dropDown}
                    />
                    <AntDesign name="upcircleo" size={24} color="black" style={{ paddingTop: 8, paddingLeft: 6 }} />
                  </View>
                ) : null}
              </TouchableOpacity>
              {clicked ? (
                <View style={styles.dropDownContainer}>
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
                            navigation.navigate('LibBookDetail', { item });
                            setClicked(!clicked);
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
        data={LibraryBooks}
        renderItem={Book}
      />
    </View>
  );
};

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
    borderRadius: 7,
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 5,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 0,
    paddingRight: 40
  },
  dropDownContainer: {
    elevation: 20,
    height: 330,
    alignSelf: 'center',
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
  },
  dropDown: {
    width: '93%',
    height: 40,
    alignSelf: 'center',
    borderWidth: 0,
    borderColor: '#8e8e8e',
    paddingLeft: 15,
    paddingBottom: 2,
  }
});
