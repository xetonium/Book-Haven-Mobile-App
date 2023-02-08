import {
    Text,
    TextInput,
    View,
    StyleSheet,
    TouchableOpacity,
    FlatList,
} from 'react-native';

import { useState } from 'react';
import { Feather } from '@expo/vector-icons';

export default DynamicSearch = ({ data, renderItem, header }) => {
    const [search, setSearch] = useState('');

    const filteredData = data.filter(item =>
        item.title.toLowerCase().indexOf(search.toLowerCase()) > -1
    );

    return (
        <FlatList
            style={{
                backgroundColor: '#F5F5DC',
            }}
            ListHeaderComponent={
                <View style={styles.container}>
                    <Text style={styles.header}>{header}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                        <TextInput
                            placeholder="Search.."
                            placeholderTextColor={'#807F80'}
                            value={search}
                            onChangeText={txt => {
                                setSearch(txt);
                            }}
                            style={styles.searchBar}
                        />
                        {search.length > 0 && (
                            <TouchableOpacity
                                onPress={() => {
                                    setSearch("")
                                }}
                                style={{ alignSelf: "center", marginLeft: 16, marginBottom: 7 }}
                            >
                                <Feather name='x-circle' size={30} />
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            }
            data={filteredData}
            renderItem={renderItem}
        />
    );

    // </View>
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#F5F5DC',
        flex: 1,
    },
    header: {
        fontWeight: 'bold',
        fontSize: 40,
        paddingTop: 20,
        paddingBottom: 10,
        textAlign: 'center',
    },

    searchBar: {
        width: '83%',
        height: 40,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#8e8e8e',
        borderRadius: 7,
        marginTop: 10,
        paddingLeft: 20,
        marginBottom: 20,
        fontSize: 18,
    }
});