import { Text, ScrollView, StyleSheet } from 'react-native';
export default BookContent = ({ route }) => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.text}>
                {route.params.book.content}
            </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5DC',
        flex: 1,
        
    },
    text: {
        fontSize: 18,
    }
})