import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import { StyleSheet } from 'react-native';
import HomeScreen from './home';
import LibraryScreen from './library';
import StoreMain from './store';
const Tab = createBottomTabNavigator();

export default App = () => {
  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ tabBarIcon: homeIcon }}
        />

        <Tab.Screen
          name="Library"
          component={LibraryScreen}
          options={{ tabBarIcon: bookIcon }}
        />

        <Tab.Screen
          name="Store"
          component={StoreMain}
          options={{ tabBarIcon: storeIcon }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const bookIcon = () => {
  return (
    <Image source={require('./assets/book-icon.png')} style={styles.image} />
  );
};

const homeIcon = () => {
  return (
    <Image source={require('./assets/home-icon.png')} style={styles.image} />
  );
};

const storeIcon = () => {
  return (
    <Image source={require('./assets/store-icon.png')} style={styles.image} />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5DC',
  },

  image: {
    height: 25,
    width: 25,
  },
});
