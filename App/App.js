import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, StyleSheet } from 'react-native';
import Login from './login';
import Signup from './signup';
import ForgotPassword from './forgotPassword';
import Home from './home';
import LibraryMain from './library';
import LibBookDetail from './libBookInfo';
import BookContent from './bookContent';
import StoreBookDetail from './storeBookInfo';
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

const MainNav = () => {
  return (
    <Tab.Navigator initialRouteName="Login">
      <Tab.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false, tabBarButton: () => null, tabBarVisible: false, tabBarStyle: { display: 'none' } }}
      />

      <Tab.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false, tabBarButton: () => null, tabBarVisible: false, tabBarVisible: false, tabBarStyle: { display: 'none' } }}
      />


      <Tab.Screen
        name="Forgot Password"
        component={ForgotPassword}
        options={{ headerShown: false, tabBarButton: () => null, tabBarVisible: false, tabBarVisible: false, tabBarStyle: { display: 'none' } }}
      />

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
      <Stack.Navigator screenOptions={{ headerBackTitle: 'Back' }}>
        <Stack.Screen name="MainStack" component={MainNav} options={{ headerShown: false }} />
        <Stack.Screen name="LibBookDetail" component={LibBookDetail} options={({ route }) => ({
          title: route.params.item.title
        })} />
        <Stack.Screen name="BookContent" component={BookContent} options={({ route }) => ({
          title: "Read: " + route.params.book.title
        })} />
        <Stack.Screen name="StoreBookDetail" component={StoreBookDetail} options={({ route }) => ({
          title: route.params.item.title
        })} />
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
