import {
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import LibraryBooks from './libraryData';
import DynamicSearch from './dynamicSearch';

export default LibraryMain = ({ navigation }) => {
  const Book = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.bookContainer}
        onPress={() => {
          navigation.navigate('LibBookDetail', { item });
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
    <DynamicSearch data={LibraryBooks} renderItem={Book} header={"Your Books"}/>
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
