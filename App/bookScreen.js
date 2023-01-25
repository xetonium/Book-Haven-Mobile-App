import { View, Text, Image } from 'react-native';
export default BookScreen = () => {
    const book = navigation.state.params.book;
    <View>
        <Image source={{ uri: book.image }} />
        <Text>{book.title}</Text>
        <Text>{book.author}</Text>
    </View>
}