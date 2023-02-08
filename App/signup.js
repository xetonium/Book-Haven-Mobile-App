import { useState } from 'react';
import {
	Text,
	TextInput,
	View,
	TouchableOpacity,
	StyleSheet,
	Alert,
} from 'react-native';
import fireBaseApp from './firebase';
const auth = fireBaseApp.auth();
import CustomButton from './button'

export default function Signup({ navigation }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const onHandleClear = () => {
		setEmail('');
		setPassword('');
		setConfirmPassword('');
	};

	const onHandleSignUp = async () => {
		try {
			if (email == '' || password == '' || confirmPassword == '') {
				Alert.alert("Please enter all fields!");
			}
			else {
				if (password == confirmPassword) {
					await auth.createUserWithEmailAndPassword(email, password);
					Alert.alert("Success", "Account successfully created!");
					navigation.navigate("Login");
					setEmail('');
					setPassword('');
					setConfirmPassword('');
				}

				else {
					Alert.alert("Passwords mismatch!");
				}
			}
		} catch (error) {
			Alert.alert(error.message);
		}
	};

	const onHandleCancel = () => {
		navigation.navigate("Login");
		setEmail('');
		setPassword('');
		setConfirmPassword('');
	}

	return (
		<View style={styles.container}>
			<Text style={styles.headerText}>Sign up</Text>
			<View>
				<Text style={styles.formText}>Email</Text>
				<TextInput
					style={styles.input}
					placeholder={'example@mail.com'}
					placeholderTextColor={'#807F80'}
					autoCapitalize="none"
					value={email}
					keyboardType="email-address"
					textContentType="emailAddress"
					onChangeText={(text) => setEmail(text)}
				/>
				<Text style={styles.formText}>Password</Text>
				<TextInput
					style={styles.input}
					placeholder={"At least six characters"}
					placeholderTextColor={'#807F80'}
					secureTextEntry={true}
					textContentType="password"
					autoCapitalize="none"
					value={password}
					onChangeText={(text) => setPassword(text)}
				/>
				<Text style={styles.formText}>Re-enter Password</Text>
				<TextInput
					style={styles.input}
					secureTextEntry={true}
					textContentType="password"
					autoCapitalize="none"
					value={confirmPassword}
					onChangeText={(text) => setConfirmPassword(text)}
				/>
				<TouchableOpacity onPress={onHandleClear} style={styles.clearForm}>
					<Text style={styles.clearText}>Clear</Text>
				</TouchableOpacity>

				<CustomButton 
				containerStyle={styles.enterButton} 
				buttonTextStyle={styles.buttonText} 
				text={"Sign Up"} 
				onPressHandler={onHandleSignUp} 
				/>

				<CustomButton 
				containerStyle={styles.cancelButton} 
				buttonTextStyle={styles.buttonText} 
				text={"Cancel"} 
				onPressHandler={onHandleCancel} 
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	headerText: {
		paddingBottom: 40,
		fontSize: 40,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	formText: {
		paddingTop: 10,
		paddingBottom: 10,
		fontSize: 20,
	},
	input: {
		padding: 5,
		height: 30,
		width: 300,
		borderWidth: 1,
		borderColor: 'black',
		backgroundColor: 'white',
		fontSize: 17,
		borderRadius: 5,
	},
	clearForm: {
		marginLeft: 260,
		textAlign: 'right',
	},
	clearText: {
		fontSize: 17,
		color: 'blue',
		textDecorationLine: 'underline',
		marginTop: 5,
	},
	enterButton: {
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: 'black',
		backgroundColor: 'rgba(24, 210, 251, 0.50)',
		marginTop: 30,
		borderRadius: 10,
		height: 35,
	},
	cancelButton: {
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: 'black',
		backgroundColor: 'rgba(221, 121, 115, 0.80)',
		marginTop: 10,
		borderRadius: 10,
		height: 35,
	},
	buttonText: {
		fontSize: 20,
	},
});
