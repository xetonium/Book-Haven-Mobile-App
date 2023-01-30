import { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';
import fireBaseApp from './firebase';
const auth = fireBaseApp.auth();

export default ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const onHandleCancel = () => {
    navigation.navigate("Login");
    setEmail('');
  }

  const onHandlePasswordReset = async () => {
    try {
      if (email == '') {
        Alert.alert("Please enter all fields!");
      }

      else {
        await auth.sendPasswordResetEmail(email);
        Alert.alert('Success', 'Check email for instructions!');
        navigation.navigate("Login");
        setEmail('');
      }
    } catch (error) {
      Alert.alert(error.message)
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Forgot Password?</Text>

      <View>
        <Text style={styles.emailStyle}>Email</Text>
        <TextInput
          style={styles.textInputBox}
          placeholder={'example@mail.com'}
          placeholderTextColor={'#807f80'}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={onHandlePasswordReset}
        >
          <Text style={styles.buttonText}>reset password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={onHandleCancel}>
          <Text style={styles.buttonText}>cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    paddingTop: 25,
  },

  textInputBox: {
    padding: 5,
    height: 30,
    width: 300,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    placeholderTextColor: 'grey',
    fontSize: 17,
    borderRadius: 5,
    marginBottom: 40,
  },

  emailStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 20,
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(24, 210, 251, 0.50)',
    height: 40,
    borderRadius: 10,
    marginLeft: 95,
    marginRight: 95,
    marginBottom: 10,
  },

  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Trebuchet MS',
  },

  header: {
    fontSize: 50,
    fontWeight: 'bold',
    fontFamily: 'Trebuchet MS',
    marginBottom: 100,
  },
});
