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
import fireBaseApp from './firebase';
const auth = fireBaseApp.auth();

export default Home = ({ navigation }) => {
  const Book = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Book', { item })
      }>
      <Image source={{ uri: item.image }} style={styles.book} />
    </TouchableOpacity>
  );

  const onHandleLogout = async () => {
    try {
      await auth.signOut();
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.logoutContainer}>
        <TouchableOpacity onPress={onHandleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
          <Image source={require('./assets/logout.png')} style={styles.logoutImage} />
        </TouchableOpacity>
      </View>
      <Text style={styles.header}>Welcome Back</Text>
      <Text style={styles.subHeader}>pick up from where you left off</Text>
      <ScrollView horizontal={true} style={styles.bookContainer}>
        <FlatList
          horizontal={true}
          data={libraryBooks.slice(0, 3)}
          renderItem={Book}
<<<<<<< HEAD
=======
        // renderItem={({ item }) => (
        //   <Book title={item.title} image={item.image} author={item.author}/>
        // )}
        // keyExtractor={(item) => item.id}
>>>>>>> 59bfe5375d32b65c021fbfe8475ea0b45054b550
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
          renderItem={Book}
<<<<<<< HEAD
=======
        // renderItem={({ item }) => (
        //   <Book title={item.title} image={item.image} author={item.author}/>
        // )}
        // keyExtractor={(item) => item.id}
>>>>>>> 59bfe5375d32b65c021fbfe8475ea0b45054b550
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
  logoutContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  logoutText: {
    fontSize: 25,
  },

  logoutImage: {
    marginLeft: 22,
    height: 25,
    width: 25,
  }
});