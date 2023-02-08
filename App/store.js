import {
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import StoreBooks from './storeData';
import DynamicSearch from './dynamicSearch';

export default LibraryMain = ({ navigation }) => {
  const Book = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.bookContainer}
        onPress={() => {
          navigation.navigate('StoreBookDetail', { item });
        }}>
        <Image source={{ uri: item.image }} style={styles.bookCover} />
        <Text style={styles.bookTitle}>
          {item.title}
          <Text style={styles.bookAuthor}>
            {'\nby ' + item.author}
          </Text>
          <Text style={{fontSize:18, fontWeight: 'bold'}}>
            {'\n$' + item.buy}
          </Text>
        </Text>
      </TouchableOpacity>
    )
  }
  
  return (
    <DynamicSearch data={StoreBooks} renderItem={Book} header={"Store"}/>
  );
};

const styles = StyleSheet.create({
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
