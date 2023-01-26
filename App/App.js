import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, StyleSheet } from 'react-native';
import Login from './login';
import Signup from './signup';
import ForgotPassword from './forgotPassword';
import Home from './home';
import LibraryMain from './library';
import BookDetail from './bookDetail';
import StoreMain from './store';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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

function BottomNav() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarIcon: homeIcon }}
      />

      <Tab.Screen
        name="Library"
        component={LibraryMain}
        options={{ tabBarIcon: bookIcon }}
      />

      <Tab.Screen
        name="Store"
        component={StoreMain}
        options={{ tabBarIcon: storeIcon }}
      />
    </Tab.Navigator>
  )
}

export default App = () => {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="MainStack" component={BottomNav} options={{headerShown: false}}/>
        <Stack.Screen name="Book" component={BookDetail}/>
      </Stack.Navigator>
    </NavigationContainer>
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
