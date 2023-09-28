import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const SongList = ({ songs }) => {
    // Renderiza cada elemento de la lista de canciones
    const renderSong = ({ item }) => (
        <View style={styles.songContainer}>
            <Text style={styles.songTitle}>{item.title}</Text>
            <Text style={styles.songArtist}>{item.artist}</Text>
        </View>
    );

    return (
        <FlatList
            data={songs}
            renderItem={renderSong}
            keyExtractor={(item) => item.id.toString()} // Asegura que cada elemento tenga una clave única
            style={styles.container}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    songContainer: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    songTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    songArtist: {
        fontSize: 16,
        color: 'gray',
    },
});

export default SongList;
