import { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
export default BookContent = ({ route }) => {
    const [fontSize, setFontSize] = useState(20);

    const handleIncrease = () => {
        setFontSize(fontSize + 2);
    };

    const handleDecrease = () => {
        setFontSize(fontSize - 2);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.fontSize}>
                <TouchableOpacity onPress={() => {
                    if (fontSize >= 10)
                        handleDecrease()
                }}>
                    <AntDesign name="minuscircleo" size={20} color="black" />
                </TouchableOpacity>
                <Text style={{ fontSize: 20 }}>Font Size</Text>
                <TouchableOpacity onPress={() => {
                    if (fontSize <= 30)
                        handleIncrease()
                }}>
                    <AntDesign name="pluscircleo" size={20} color="black" />
                </TouchableOpacity>

            </View>
            <Text style={{ fontSize, paddingBottom: 20, paddingTop: 10 }}>
                {route.params.book.content}
            </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5DC',
        flex: 1,
        padding: 10,
    },
    fontSize: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 50,
        marginRight: 50,
        borderWidth: 1,
        padding: 5,
    }
})