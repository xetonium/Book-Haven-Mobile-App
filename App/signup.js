import { useState } from 'react';
import {
    Text,
    TextInput,
    View,
    TouchableOpacity,
    StyleSheet,
    Alert,
} from 'react-native';

export default function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    const signUp = () => {
        if (password1 != password2) {
            Alert.alert('Passwords do not match, try again');
        } else if (
            username == '' ||
            email == '' ||
            password1 == '' ||
            password2 == ''
        ) {
            Alert.alert('Missing information');
        } else {
            Alert.alert('Signed up successfully');
        }
    };

    const clear = () => {
        setUsername('');
        setEmail('');
        setPassword1('');
        setPassword2('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Sign up</Text>
            <View>
                <Text style={styles.formText}>Username</Text>
                <TextInput
                    style={styles.input}
                    placeholder={'Username must be unique'}
                    placeholderTextColor={'#807F80'}
                    autoCapitalize="none"
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                />
                <Text style={styles.formText}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder={'example@mail.com'}
                    placeholderTextColor={'#807F80'}
                    autoCapitalize="none"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Text style={styles.formText}>Password</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    value={password1}
                    onChangeText={(text) => setPassword1(text)}
                />
                <Text style={styles.formText}>Re-enter Password</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    value={password2}
                    onChangeText={(text) => setPassword2(text)}
                />
                <TouchableOpacity onPress={clear} style={styles.clearForm}>
                    <Text style={styles.clearText}>Clear</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.enterButton} onPress={signUp}>
                    <Text style={styles.buttonText}>Sign up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cancelButton}>
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
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
