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
  const LibBook = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('LibBookDetail', { item })
      }>
      <Image source={{ uri: item.image }} style={styles.book} />
    </TouchableOpacity>
  );

  const StoreBook = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('StoreBookDetail', { item })
      }>
      <Image source={{ uri: item.image }} style={styles.book} />
    </TouchableOpacity>
  );

  const onHandleLogout = async () => {
    Alert.alert(
      "Logout",
      "Do you wish to continue?",
      [
        {
          text: "Yes",
          onPress: async () => {
            try {
              await auth.signOut();
              navigation.navigate('Login');
            } catch (error) {
              Alert.alert(error.message);
            }
          }
        },
        {
          text: "Cancel",
        },
      ],
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Welcome Back</Text>
      <Text style={styles.subHeader}>pick up from where you left off</Text>
      <View style={styles.bookContainer}>
        <FlatList
          horizontal={true}
          data={libraryBooks.slice(0, 3)}
          renderItem={LibBook}
          ListFooterComponent={
            <>
              <TouchableOpacity onPress={() => navigation.navigate('Library')} style={styles.arrowView}>
                <Image
                  source={require('./assets/arrow-right.png')}
                  style={styles.arrowImage}
                />
                <Text style={styles.seeAllText}>see all</Text>
              </TouchableOpacity>
            </>
          }
        />
      </View>

      <Text style={styles.subHeader}>popular picks for you</Text>
      <View style={styles.bookContainer}>
        <FlatList
          horizontal={true}
          data={storeBooks.slice(0, 3)}
          renderItem={StoreBook}
          ListFooterComponent={
            <>
              <TouchableOpacity onPress={() => navigation.navigate('Store')} style={styles.arrowView}>
                <Image
                  source={require('./assets/arrow-right.png')}
                  style={styles.arrowImage}
                />
                <Text style={styles.seeAllText}>see all</Text>
              </TouchableOpacity>
            </>
          }
        />
      </View>
      <TouchableOpacity onPress={onHandleLogout} style={styles.button}>
        <View style={styles.logoutContainer}>
          <Text style={styles.logoutText}>Logout</Text>
          <Image source={require('./assets/logout.png')} style={styles.logoutImage} />
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5DC',
    paddingTop: 10,
  },

  header: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 30,
  },

  subHeader: {
    fontSize: 22,
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
    textDecorationLine: 'underline',
  },

  arrowView: {
    marginTop: 'auto',
    marginBottom: 'auto',
    paddingRight: 20,
  },

  button: {
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 275,
    marginRight: 10,
    marginBottom: 50,
  },

  logoutContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(221, 121, 115, 0.80)',
    paddingTop: 5,
    paddingBottom: 5,
  },

  logoutText: {
    fontSize: 25,
  },

  logoutImage: {
    marginLeft: 10,
    height: 25,
    width: 25,
  },
});