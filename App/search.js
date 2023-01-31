import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList,
} from 'react-native';
import React, { useRef, useState } from 'react';
import LibraryBooks from './libraryData';
import StoreBooks from './storeData';

export default Search = () => {
    const [search, setSearch] = useState('');
    const [clicked, setClicked] = useState(false);
    const [data, setData] = useState(LibraryBooks);
    const [selectedBook, setSelectedBook] = useState('');
    const searchRef = useRef();
    const onSearch = search => {
        if (search !== '') {
            let tempData = data.filter(item => {
                return item.title.toLowerCase().indexOf(search.toLowerCase()) > -1;
            });
            setData(tempData);
        } else {
            setData(LibraryBooks);
        }
    };
    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity
                style={{
                    width: '90%',
                    height: 50,
                    borderRadius: 10,
                    borderWidth: 0.5,
                    alignSelf: 'center',
                    marginTop: 100,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingLeft: 15,
                    paddingRight: 15,
                }}
                onPress={() => {
                    setClicked(!clicked);
                }}>
                <Text style={{ fontWeight: '600' }}>
                    {selectedBook == '' ? 'Search book by title...' : selectedBook}
                </Text>
                {clicked ? (
                    <Image
                        source={require('./assets/splash.png')}
                        style={{ width: 20, height: 20 }}
                    />
                ) : (
                    <Image
                        source={require('./assets/splash.png')}
                        style={{ width: 20, height: 20 }}
                    />
                )}
            </TouchableOpacity>
            {clicked ? (
                <View
                    style={{
                        elevation: 5,
                        marginTop: 20,
                        height: 300,
                        alignSelf: 'center',
                        width: '90%',
                        backgroundColor: '#fff',
                        borderRadius: 10,
                    }}>
                    <TextInput
                        placeholder="Search.."
                        value={search}
                        ref={searchRef}
                        onChangeText={txt => {
                            onSearch(txt);
                            setSearch(txt);
                        }}
                        style={{
                            width: '90%',
                            height: 50,
                            alignSelf: 'center',
                            borderWidth: 0.2,
                            borderColor: '#8e8e8e',
                            borderRadius: 7,
                            marginTop: 20,
                            paddingLeft: 20,
                        }}
                    />

                    <FlatList
                        data={data}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity
                                    style={{
                                        width: '85%',
                                        alignSelf: 'center',
                                        height: 50,
                                        justifyContent: 'center',
                                        borderBottomWidth: 0.5,
                                        borderColor: '#8e8e8e',
                                    }}
                                    onPress={() => {
                                        setSelectedBook(item.title);
                                        setClicked(!clicked);
                                        onSearch('');
                                        setSearch('');
                                    }}>
                                    <Text style={{ fontWeight: '600' }}>{item.title}</Text>
                                </TouchableOpacity>
                            );
                        }}
                    />
                </View>
            ) : null}
        </View>
    );
};