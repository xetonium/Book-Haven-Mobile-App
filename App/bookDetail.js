import { View, ScrollView, Text, Image, StyleSheet } from 'react-native';
export default BookDetail = ({ route }) => {
    return (
        <ScrollView style={styles.container}>
            <Image style={styles.book} source={{ uri: route.params.item.image }} />
            <Text style={styles.title}>{route.params.item.title}</Text>
            <Text style={styles.author}>{'By '}{route.params.item.author}</Text>
            <View style={styles.information}>
                <View style={styles.column}>
                    <Text style={styles.bookDetails}>{route.params.item.year}</Text>
                    <Text style={{ color: '#807f80' }}>Release</Text>
                </View>
                <View style={styles.column}>
                    <Text style={styles.bookDetails}>{route.params.item.language}</Text>
                    <Text style={{ color: '#807f80' }}>Language</Text>
                </View>
                <View style={styles.column}>
                    <Text style={styles.bookDetails}>{route.params.item.pages}</Text>
                    <Text style={{ color: '#807f80' }}>Pages</Text>
                </View>
            </View>
            <View style={styles.synopsisContainer}>
                <Text style={{ fontSize: 25, textDecorationLine: 'underline' }}>{'Synopsis'}</Text>
                <Text style={styles.synopsis}>{route.params.item.synopsis}</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F5DC',
        flex: 1,
        padding: 10,
    },
    book: {
        width: 400,
        height: 600,
        alignSelf: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center',
    },
    author: {
        fontSize: 30,
        fontStyle: 'italic',
        textAlign: 'center',
    },
    information: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
    },
    column: {
        alignItems: 'center',
    },
    bookDetails: {
        fontSize: 22,
    },
    synopsisContainer: {
        marginBottom: 20,
    },
    synopsis: {
        fontSize: 18,
    },
})
