import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet, FlatList, StatusBar } from "react-native";
import SoundPlayer from 'react-native-sound-player'


const Stack = createNativeStackNavigator();

function Home({ navigation, route }) {

    return (
        <ScrollView vertical>

            <View style={styles.contenedor}>
                <Text style={styles.titulo}>Rock</Text>

                <ScrollView horizontal>
                    <TouchableOpacity onPress={() => navigation.navigate('Album', {
                        title: "The Dark Side of the Moon",
                        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/The_Dark_Side_of_the_Moon_Cover.svg/1024px-The_Dark_Side_of_the_Moon_Cover.svg.png',
                        songs: [
                            {
                                title: 'Money',
                            },
                            {
                                title: 'Time',
                            },
                            {
                                title: 'Us and Them',
                            },
                        ]
                    })}>
                        <Image style={styles.album} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/The_Dark_Side_of_the_Moon_Cover.svg/1024px-The_Dark_Side_of_the_Moon_Cover.svg.png' }} />
                    </TouchableOpacity >

                    <TouchableOpacity onPress={() => navigation.navigate('Album', {
                        title: "Abbey Road",
                        img: 'https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg',
                        songs: [
                            {
                                title: 'Come Together',
                            },
                            {
                                title: 'Here Comes the Sun',
                            },
                            {
                                title: 'Something',
                            },
                        ]
                    })}>
                        <Image style={styles.album} source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg' }} />
                    </TouchableOpacity >

                    <TouchableOpacity onPress={() => navigation.navigate('Album', {
                        title: "IV",
                        img: 'https://upload.wikimedia.org/wikipedia/en/2/26/Led_Zeppelin_-_Led_Zeppelin_IV.jpg',
                        songs: [
                            {
                                title: 'Stairway to Heaven',
                            },
                            {
                                title: 'Black Dog',
                            },
                            {
                                title: 'Rock and Roll',
                            },
                        ]
                    })}>
                        <Image style={styles.album} source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/2/26/Led_Zeppelin_-_Led_Zeppelin_IV.jpg' }} />
                    </TouchableOpacity >

                    <TouchableOpacity onPress={() => navigation.navigate('Album', {
                        title: "A Night at the Opera",
                        img: 'https://m.media-amazon.com/images/I/51h786SuyIL._AC_UF894,1000_QL80_.jpg',
                        songs: [
                            {
                                title: 'Bohemian Rhapsody',
                            },
                            {
                                title: "You're My Best Friend",
                            },
                            {
                                title: 'Love of My Life',
                            },
                        ]
                    })}>
                        <Image style={styles.album} source={{ uri: 'https://m.media-amazon.com/images/I/51h786SuyIL._AC_UF894,1000_QL80_.jpg' }} />
                    </TouchableOpacity >

                    <TouchableOpacity onPress={() => navigation.navigate('Album', {
                        title: "Exile on Main St.",
                        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/ExileMainSt.jpg/220px-ExileMainSt.jpg',
                        songs: [
                            {
                                title: 'Tumbling Dice',
                            },
                            {
                                title: 'Rocks Off',
                            },
                            {
                                title: 'Sweet Virginia',
                            },
                        ]
                    })}>
                        <Image style={styles.album} source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/ExileMainSt.jpg/220px-ExileMainSt.jpg' }} />
                    </TouchableOpacity >

                    <TouchableOpacity onPress={() => navigation.navigate('Album', {
                        title: "The Joshua Tree",
                        img: 'https://m.media-amazon.com/images/I/71nhNKvy+fL._UF350,350_QL50_.jpg',
                        songs: [
                            {
                                title: 'With or Without You',
                            },
                            {
                                title: 'Where the Streets Have No Name',
                            },
                            {
                                title: "I Still Haven't Found What I'm Looking For",
                            },
                        ]
                    })}>
                        <Image style={styles.album} source={{ uri: 'https://m.media-amazon.com/images/I/71nhNKvy+fL._UF350,350_QL50_.jpg' }} />
                    </TouchableOpacity >

                    <TouchableOpacity onPress={() => navigation.navigate('Album', {
                        title: "Nevermind",
                        img: 'https://m.media-amazon.com/images/I/71DQrKpImPL._UF894,1000_QL80_.jpg',
                        songs: [
                            {
                                title: 'Smells Like Teen Spirit',
                            },
                            {
                                title: 'Come as You Are',
                            },
                            {
                                title: 'Lithium"',
                            },
                        ]
                    })}>
                        <Image style={styles.album} source={{ uri: 'https://m.media-amazon.com/images/I/71DQrKpImPL._UF894,1000_QL80_.jpg' }} />
                    </TouchableOpacity >

                    <TouchableOpacity onPress={() => navigation.navigate('Album', {
                        title: "Who's Next",
                        img: 'https://upload.wikimedia.org/wikipedia/en/4/44/Whosnext.jpg',
                        songs: [
                            {
                                title: "Baba O'Riley",
                            },
                            {
                                title: 'Behind Blue Eyes',
                            },
                            {
                                title: 'My Wife',
                            },
                        ]
                    })}>
                        <Image style={styles.album} source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/4/44/Whosnext.jpg' }} />
                    </TouchableOpacity >

                    <TouchableOpacity onPress={() => navigation.navigate('Album', {
                        title: "Appetite for Destruction",
                        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/Appetitefordestruction.jpg/220px-Appetitefordestruction.jpg',
                        songs: [
                            {
                                title: "Sweet Child o' Mine",
                            },
                            {
                                title: 'Welcome to the Jungle',
                            },
                            {
                                title: 'Paradise City',
                            },
                        ]
                    })}>
                        <Image style={styles.album} source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/Appetitefordestruction.jpg/220px-Appetitefordestruction.jpg' }} />
                    </TouchableOpacity >

                    <TouchableOpacity onPress={() => navigation.navigate('Album', {
                        title: "L.A. Woman",
                        img: 'https://upload.wikimedia.org/wikipedia/en/4/41/The_Doors_-_L.A._Woman.jpg',
                        songs: [
                            {
                                title: 'Riders on the Storm',
                            },
                            {
                                title: 'Love Her Madly',
                            },
                            {
                                title: 'L.A. Woman',
                            },
                        ]
                    })}>
                        <Image style={styles.album} source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/4/41/The_Doors_-_L.A._Woman.jpg' }} />
                    </TouchableOpacity >

                </ScrollView>
            </View>

            <View style={styles.contenedor}>
                <Text style={styles.titulo}>Latina</Text>

                <ScrollView horizontal>
                    <TouchableOpacity onPress={() => navigation.navigate('Album', {
                        title: "Sueño Stereo",
                        img: 'https://4.bp.blogspot.com/-Tfp3bBZH8sA/We5uQolNu4I/AAAAAAAAKQA/C21mxn_STmgIrq83Bm4JmM7HxgCl0EkWQCLcBGAs/s1600/soda_stereo-sueno_stereo.jpg',
                        songs: [
                            {
                                title: 'Zoom',
                            },
                            {
                                title: 'Ella Usó Mi Cabeza Como un Revólver',
                            },
                            {
                                title: 'Paseando por Roma',
                            },
                        ]
                    })}>
                        <Image style={styles.album} source={{ uri: 'https://4.bp.blogspot.com/-Tfp3bBZH8sA/We5uQolNu4I/AAAAAAAAKQA/C21mxn_STmgIrq83Bm4JmM7HxgCl0EkWQCLcBGAs/s1600/soda_stereo-sueno_stereo.jpg' }} />
                    </TouchableOpacity >

                    <TouchableOpacity onPress={() => navigation.navigate('Album', {
                        title: "Querida",
                        img: 'https://i.discogs.com/hpv2679dmI1FP0Q0T5jVp8No-9YYb1ahPJYchvp3Wu0/rs:fit/g:sm/q:90/h:600/w:598/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTcxOTU1/NTEtMTU0NDYwNzY1/My02MTM5LmpwZWc.jpeg',
                        songs: [
                            {
                                title: 'Come Together',
                            },
                            {
                                title: 'Here Comes the Sun',
                            },
                            {
                                title: 'Something',
                            },
                        ]
                    })}>
                        <Image style={styles.album} source={{ uri: 'https://i.discogs.com/hpv2679dmI1FP0Q0T5jVp8No-9YYb1ahPJYchvp3Wu0/rs:fit/g:sm/q:90/h:600/w:598/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTcxOTU1/NTEtMTU0NDYwNzY1/My02MTM5LmpwZWc.jpeg' }} />
                    </TouchableOpacity >

                    <TouchableOpacity onPress={() => navigation.navigate('Album', {
                        title: "3.0",
                        img: 'https://i.scdn.co/image/ab67616d0000b27321be16e998effa9f1f4b63a9',
                        songs: [
                            {
                                title: 'Stairway to Heaven',
                            },
                            {
                                title: 'Black Dog',
                            },
                            {
                                title: 'Rock and Roll',
                            },
                        ]
                    })}>
                        <Image style={styles.album} source={{ uri: 'https://i.scdn.co/image/ab67616d0000b27321be16e998effa9f1f4b63a9' }} />
                    </TouchableOpacity >

                    <TouchableOpacity onPress={() => navigation.navigate('Album', {
                        title: "Fórmula, Vol. 2",
                        img: 'https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/dc/54/a1/dc54a1fd-8d5d-cc4b-69c4-0c616c67fc29/886444433280.jpg/1200x1200bb.jpg',
                        songs: [
                            {
                                title: 'Bohemian Rhapsody',
                            },
                            {
                                title: "You're My Best Friend",
                            },
                            {
                                title: 'Love of My Life',
                            },
                        ]
                    })}>
                        <Image style={styles.album} source={{ uri: 'https://is1-ssl.mzstatic.com/image/thumb/Music6/v4/dc/54/a1/dc54a1fd-8d5d-cc4b-69c4-0c616c67fc29/886444433280.jpg/1200x1200bb.jpg' }} />
                    </TouchableOpacity >

                    <TouchableOpacity onPress={() => navigation.navigate('Album', {
                        title: "Mi Vida Es Cantar",
                        img: 'https://m.media-amazon.com/images/I/41WEMNAJ4VL._UF1000,1000_QL80_.jpg',
                        songs: [
                            {
                                title: 'Tumbling Dice',
                            },
                            {
                                title: 'Rocks Off',
                            },
                            {
                                title: 'Sweet Virginia',
                            },
                        ]
                    })}>
                        <Image style={styles.album} source={{ uri: 'https://m.media-amazon.com/images/I/41WEMNAJ4VL._UF1000,1000_QL80_.jpg' }} />
                    </TouchableOpacity >

                    <TouchableOpacity onPress={() => navigation.navigate('Album', {
                        title: "Ahí Vamos",
                        img: 'https://i.scdn.co/image/ab67616d0000b273d543f7c7de880da5370922c0',
                        songs: [
                            {
                                title: 'With or Without You',
                            },
                            {
                                title: 'Where the Streets Have No Name',
                            },
                            {
                                title: "I Still Haven't Found What I'm Looking For",
                            },
                        ]
                    })}>
                        <Image style={styles.album} source={{ uri: 'https://i.scdn.co/image/ab67616d0000b273d543f7c7de880da5370922c0' }} />
                    </TouchableOpacity >

                    <TouchableOpacity onPress={() => navigation.navigate('Album', {
                        title: "Revolución de Amor",
                        img: 'https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/e6/30/4e/e6304efe-2829-8bf3-f37b-e948559c5738/190295294021.jpg/1200x1200bb.jpg',
                        songs: [
                            {
                                title: 'Smells Like Teen Spirit',
                            },
                            {
                                title: 'Come as You Are',
                            },
                            {
                                title: 'Lithium"',
                            },
                        ]
                    })}>
                        <Image style={styles.album} source={{ uri: 'https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/e6/30/4e/e6304efe-2829-8bf3-f37b-e948559c5738/190295294021.jpg/1200x1200bb.jpg' }} />
                    </TouchableOpacity >

                    <TouchableOpacity onPress={() => navigation.navigate('Album', {
                        title: "Amor Prohibido",
                        img: 'https://i.scdn.co/image/ab67616d0000b273c26a4f2195b3ecf63d2a30ae',
                        songs: [
                            {
                                title: "Baba O'Riley",
                            },
                            {
                                title: 'Behind Blue Eyes',
                            },
                            {
                                title: 'My Wife',
                            },
                        ]
                    })}>
                        <Image style={styles.album} source={{ uri: 'https://i.scdn.co/image/ab67616d0000b273c26a4f2195b3ecf63d2a30ae' }} />
                    </TouchableOpacity >

                    <TouchableOpacity onPress={() => navigation.navigate('Album', {
                        title: "Entren los Que Quieran",
                        img: 'https://is1-ssl.mzstatic.com/image/thumb/Music/65/db/19/mzi.kjbtdqda.jpg/1200x1200bb.jpg',
                        songs: [
                            {
                                title: "Sweet Child o' Mine",
                            },
                            {
                                title: 'Welcome to the Jungle',
                            },
                            {
                                title: 'Paradise City',
                            },
                        ]
                    })}>
                        <Image style={styles.album} source={{ uri: 'https://is1-ssl.mzstatic.com/image/thumb/Music/65/db/19/mzi.kjbtdqda.jpg/1200x1200bb.jpg' }} />
                    </TouchableOpacity >

                    <TouchableOpacity onPress={() => navigation.navigate('Album', {
                        title: "Vasos Vacíos",
                        img: 'https://i1.sndcdn.com/artworks-S5f1ftCOVcMW-0-t500x500.jpg',
                        songs: [
                            {
                                title: 'Riders on the Storm',
                            },
                            {
                                title: 'Love Her Madly',
                            },
                            {
                                title: 'L.A. Woman',
                            },
                        ]
                    })}>
                        <Image style={styles.album} source={{ uri: 'https://i1.sndcdn.com/artworks-S5f1ftCOVcMW-0-t500x500.jpg' }} />
                    </TouchableOpacity >

                </ScrollView>
            </View>

            <View style={styles.contenedor}>
                <Text style={styles.titulo}>Pop</Text>

                <ScrollView horizontal>
                    <TouchableOpacity onPress={() => navigation.navigate('Album', {
                        title: "Thriller",
                        img: 'https://www.todomusica.org/imagenes/michael_jackson/billie_jean.jpg',
                        songs: [
                            {
                                title: 'Zoom',
                            },
                            {
                                title: 'Ella Usó Mi Cabeza Como un Revólver',
                            },
                            {
                                title: 'Paseando por Roma',
                            },
                        ]
                    })}>
                        <Image style={styles.album} source={{ uri: 'https://www.todomusica.org/imagenes/michael_jackson/billie_jean.jpg' }} />
                    </TouchableOpacity >

                    <TouchableOpacity onPress={() => navigation.navigate('Album', {
                        title: "Whitney Houston",
                        img: 'https://upload.wikimedia.org/wikipedia/en/9/96/Whitney_Houston%2C_Self_Titled.png',
                        songs: [
                            {
                                title: 'Come Together',
                            },
                            {
                                title: 'Here Comes the Sun',
                            },
                            {
                                title: 'Something',
                            },
                        ]
                    })}>
                        <Image style={styles.album} source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/9/96/Whitney_Houston%2C_Self_Titled.png' }} />
                    </TouchableOpacity >

                    <TouchableOpacity onPress={() => navigation.navigate('Album', {
                        title: "Teenage Dream",
                        img: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2010/08/29/14/441921.jpg?width=1200',
                        songs: [
                            {
                                title: 'Stairway to Heaven',
                            },
                            {
                                title: 'Black Dog',
                            },
                            {
                                title: 'Rock and Roll',
                            },
                        ]
                    })}>
                        <Image style={styles.album} source={{ uri: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2010/08/29/14/441921.jpg?width=1200' }} />
                    </TouchableOpacity >

                    <TouchableOpacity onPress={() => navigation.navigate('Album', {
                        title: "21",
                        img: 'https://upload.wikimedia.org/wikipedia/en/1/1b/Adele_-_21.png',
                        songs: [
                            {
                                title: 'Bohemian Rhapsody',
                            },
                            {
                                title: "You're My Best Friend",
                            },
                            {
                                title: 'Love of My Life',
                            },
                        ]
                    })}>
                        <Image style={styles.album} source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/1/1b/Adele_-_21.png' }} />
                    </TouchableOpacity >

                    <TouchableOpacity onPress={() => navigation.navigate('Album', {
                        title: "Songs About Jane",
                        img: 'https://m.media-amazon.com/images/I/91St-RmIjZL._UF1000,1000_QL80_.jpg',
                        songs: [
                            {
                                title: 'Tumbling Dice',
                            },
                            {
                                title: 'Rocks Off',
                            },
                            {
                                title: 'Sweet Virginia',
                            },
                        ]
                    })}>
                        <Image style={styles.album} source={{ uri: 'https://m.media-amazon.com/images/I/91St-RmIjZL._UF1000,1000_QL80_.jpg' }} />
                    </TouchableOpacity >

                    <TouchableOpacity onPress={() => navigation.navigate('Album', {
                        title: "1989",
                        img: 'https://upload.wikimedia.org/wikipedia/en/f/f6/Taylor_Swift_-_1989.png',
                        songs: [
                            {
                                title: 'With or Without You',
                            },
                            {
                                title: 'Where the Streets Have No Name',
                            },
                            {
                                title: "I Still Haven't Found What I'm Looking For",
                            },
                        ]
                    })}>
                        <Image style={styles.album} source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/f/f6/Taylor_Swift_-_1989.png' }} />
                    </TouchableOpacity >

                    <TouchableOpacity onPress={() => navigation.navigate('Album', {
                        title: "Doo-Wops & Hooligans",
                        img: 'https://i.discogs.com/HS8xkp3yABqPwiKEu3vSZml6yVgmFxxpUV7S8_1cX-Q/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUyMTMw/NjQtMTYxNzQ3OTA5/MC00ODQyLmpwZWc.jpeg',
                        songs: [
                            {
                                title: 'Smells Like Teen Spirit',
                            },
                            {
                                title: 'Come as You Are',
                            },
                            {
                                title: 'Lithium"',
                            },
                        ]
                    })}>
                        <Image style={styles.album} source={{ uri: 'https://i.discogs.com/HS8xkp3yABqPwiKEu3vSZml6yVgmFxxpUV7S8_1cX-Q/rs:fit/g:sm/q:40/h:150/w:150/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTUyMTMw/NjQtMTYxNzQ3OTA5/MC00ODQyLmpwZWc.jpeg' }} />
                    </TouchableOpacity >

                    <TouchableOpacity onPress={() => navigation.navigate('Album', {
                        title: "Lemonade",
                        img: 'https://upload.wikimedia.org/wikipedia/en/5/53/Beyonce_-_Lemonade_%28Official_Album_Cover%29.png',
                        songs: [
                            {
                                title: "Baba O'Riley",
                            },
                            {
                                title: 'Behind Blue Eyes',
                            },
                            {
                                title: 'My Wife',
                            },
                        ]
                    })}>
                        <Image style={styles.album} source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/5/53/Beyonce_-_Lemonade_%28Official_Album_Cover%29.png' }} />
                    </TouchableOpacity >

                    <TouchableOpacity onPress={() => navigation.navigate('Album', {
                        title: "Entren los Que Quieran",
                        img: 'https://is1-ssl.mzstatic.com/image/thumb/Music/65/db/19/mzi.kjbtdqda.jpg/1200x1200bb.jpg',
                        songs: [
                            {
                                title: "Sweet Child o' Mine",
                            },
                            {
                                title: 'Welcome to the Jungle',
                            },
                            {
                                title: 'Paradise City',
                            },
                        ]
                    })}>
                        <Image style={styles.album} source={{ uri: 'https://is1-ssl.mzstatic.com/image/thumb/Music/65/db/19/mzi.kjbtdqda.jpg/1200x1200bb.jpg' }} />
                    </TouchableOpacity >

                    <TouchableOpacity onPress={() => navigation.navigate('Album', {
                        title: "Vasos Vacíos",
                        img: 'https://i1.sndcdn.com/artworks-S5f1ftCOVcMW-0-t500x500.jpg',
                        songs: [
                            {
                                title: 'Riders on the Storm',
                            },
                            {
                                title: 'Love Her Madly',
                            },
                            {
                                title: 'L.A. Woman',
                            },
                        ]
                    })}>
                        <Image style={styles.album} source={{ uri: 'https://i1.sndcdn.com/artworks-S5f1ftCOVcMW-0-t500x500.jpg' }} />
                    </TouchableOpacity >

                </ScrollView>
            </View>
        </ScrollView>
    );
}

function Album({ navigation, route }) {
    const { title, img, songs } = route.params;

    const Item = ({ title }) => (
        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Reproductor')}>
            <Text style={styles.title}>{title}▶️</Text>
        </TouchableOpacity>
    );


    return (
        <View>
            <Text style={styles.tituloAlbum}>{title} </Text>
            <Image style={styles.albumImg} source={{ uri: img }} />

            <View style={styles.contenedor}>
                <FlatList
                    data={songs}
                    renderItem={({ item }) => <Item title={item.title} />}
                />
            </View>
        </View>
    );
}

function Reproductor() {

    
    function reproducir(){
        try {
            SoundPlayer.playSoundFile('money', 'mp3')

        } catch (e) {
            console.log(`cannot play the sound file`, e)
        }
    }

    function parar() {
        SoundPlayer.stop()
    }
    
    return (
        <View>
            <Text style={styles.tituloCancion}>Money</Text>
            <Image style={styles.albumImg} source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Money_1973.jpg' }} />

            <View style={styles.controlContainer}>
                <TouchableOpacity style={styles.control} onPress={reproducir}><Text>▶️</Text></TouchableOpacity>
                <TouchableOpacity onPress={parar}><Text>⏸️</Text></TouchableOpacity>
            </View>
        </View>
    );

}

const Nagivation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Music UDB">
                <Stack.Screen name="Music UDB" component={Home} />
                <Stack.Screen name="Album" component={Album} />
                <Stack.Screen name="Reproductor" component={Reproductor} />
            </Stack.Navigator>
        </NavigationContainer>
    );


}


const styles = StyleSheet.create({
    contenedor: {
        marginHorizontal: 10
    },
    tituloCancion: {
        fontWeight: 'bold',
        fontSize: 24,
        paddingLeft: 160,
        paddingTop: 10,
    },
    tituloAlbum: {
        fontWeight: 'bold',
        fontSize: 24,
        paddingLeft: 40,
        paddingTop: 10,
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 24,
        marginVertical: 10
    },
    album: {
        width: 150,
        height: 150,
        marginRight: 10
    },
    albumImg: {
        width: 150,
        height: 150,
        marginLeft: 120,
    },
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#C4E9EE',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    control: {
        paddingLeft:165
    },
    controlContainer:{
        marginTop: 50,
        flexDirection: 'row'
    }
});

export default Nagivation;