import { useState } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image,
    StyleSheet,
    Alert,
} from 'react-native';
const appIcon = require('./assets/appIcon.png');

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        if (email == 'example@mail.com' && password == '123456') {
            Alert.alert('Login Success');
        } else {
            Alert.alert('Login Failed');
        }
    };

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={appIcon} />
            <Text style={styles.headerText}>Login to App</Text>
            <View>
                <Text style={styles.inputText}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder={'example@mail.com'}
                    placeholderTextColor={'#807F80'}
                    autoCapitalize="none"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Text style={styles.inputText}>Password</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    autoCapitalize="none"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                />
                <TouchableOpacity style={styles.enterButton} onPress={login}>
                    <Text style={styles.enterButtonText}> Sign in</Text>
                </TouchableOpacity>
                <View style={styles.bottomNav}>
                    <TouchableOpacity>
                        <Text style={styles.bottomNavText}>Sign up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.bottomNavText}>Forgot password</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(24, 210, 251, 0.50)',
        paddingTop: 150,
    },
    logo: {
        height: 128,
        width: 128,
        alignItems: 'center',
        justifyContent: 'centre',
        borderRadius: 90,
    },
    headerText: {
        paddingTop: 40,
        paddingBottom: 40,
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    inputText: {
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
        placeholderTextColor: '#807f80',
        fontSize: 17,
        borderRadius: 5,
    },
    enterButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: '#00FF0A',
        marginTop: 50,
        borderRadius: 10,
        height: 35,
    },
    enterButtonText: {
        fontSize: 20,
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    bottomNavText: {
        textDecorationLine: 'underline',
        fontSize: 17,
    },
});
