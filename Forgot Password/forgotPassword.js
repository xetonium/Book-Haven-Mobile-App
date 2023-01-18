import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';

export default ForgotPassword = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Forgot Password?</Text>

      <View>
        <Text style={styles.emailStyle}>Email</Text>
        <TextInput
          style={styles.textInputBox}
          placeholder={'example@mail.com'}
          placeholderTextColor={'#807f80'}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Alert.alert('Reset password', 'Check email for instructions!');
          }}>
          <Text style={styles.buttonText}>reset password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
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
