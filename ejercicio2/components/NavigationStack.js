import React, { useEffect, useState } from 'react';
import { NavigationContainer, createNavigationContainerRef } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Button, TextInput, StyleSheet, TouchableHighlight, Alert } from "react-native";
import styles from './styles';
import { CheckBox, normalize } from 'react-native-elements';
import shortid from "react-id-generator";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

function Login({ navigation }) {
    //Constantes login
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.body}>
            <View style={styles.header}>
                <Text style={styles.titulo}>Login</Text>
            </View>
            <View style={styles.inputs}>
                <TextInput style={styles.input} placeholder='Ingrese su email' />
                <TextInput style={styles.input} placeholder='Ingrese su contraseña' />
            </View>
            <View style={styles.btnLogin}>
                <View style={styles.boton}>
                    <Button title='Login' />
                </View>

                <View style={styles.nocuenta}>
                    <Text>¿No tenes cuenta? </Text>
                    <Text style={{ color: 'blue' }} onPress={() => navigation.navigate('Registro')}>Registrate</Text>
                </View>
            </View>
        </View>
    );
}

/* ****** Registro *************/
function Registro({ navigation, usuarios, setUsuarios, guardarUsuarioStorage }) {
    //Estado del checkbox
    const [checked, setCheked] = useState(false);
    //constantes de usuario
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rpass, setRPass] = useState('');

    //Crear usuario
    const registrarUsuario = () => {
        console.log(checked);
        if (nombre.trim() === '' || email.trim() === '' || password.trim() === '' || rpass.trim() === '' || checked == false) {
            mostrarAlerta();
            return;
        } else {
            if (password != rpass) {
                console.log('Las contraseñas no coiciden');
                return;
            }
            console.log('Pasele');
        }
        const usuario = { nombre, email, password };
        usuario.id = shortid();
        //console.log(usuario);

        //const nuevoUser = [...usuarios, usuario];
        //setUsuarios(nuevoUser);

        //guardarUsuarioStorage(JSON.stringify(nuevoUser));

        //Resetear el form
        setNombre('');
        setEmail('');
        setPassword('');
        setRPass('');
        setCheked(!checked)

    }
    const mostrarAlerta = () =>{
        Alert.alert(
            'ERROR',
            'Todos los campos son obligatorios',
            [{
                text: 'OK'
            }]
        )
    }
    return (
        <View style={styles.body}>
            <View style={styles.headerRegistro}>
                <Text style={styles.titulo}>Registro</Text>
            </View>
            <View style={styles.inputsRegistro}>
                <TextInput style={styles.inputRegistro} placeholder='Nombre de usuario' onChangeText={texto => setNombre(texto)} />
                <TextInput style={styles.inputRegistro} placeholder='Ingrese su email' onChangeText={texto => setEmail(texto)} />
                <TextInput style={styles.inputRegistro} placeholder='Ingrese su contraseña' onChangeText={texto => setPassword(texto)} />
                <TextInput style={styles.inputRegistro} placeholder='Repita contraseña' onChangeText={texto => setRPass(texto)} />
                <CheckBox
                    title='Acepto los terminos y condiciones'
                    checked={checked}
                    onPress={() => setCheked(!checked)}
                />

                <Text>{checked ? "Yes" : "NO"}</Text>
            </View>
            <View style={styles.btnRegistro}>

                <View style={styles.terminos}>

                    <Text></Text>
                </View>
                <View style={styles.boton}>
                    <Button title='Registar' onPress={() => navigation.navigate(Contactos)} />
                </View>

            </View>
        </View>
    );
}

/*** Contactos ****/
function Contactos({ navigation}) {

    const [contactos, setContactos] = useState([]);

    useEffect(()=>{
        const obtenerContactosStorage = async ()=>{
            try{
                const contactosStorage = await AsyncStorage.getItem('contactos');
                if(contactosStorage){
                    setContactos(JSON.parse(contactosStorage))

                }
                
            }catch(error){
                console.log(error);
            }
        }
        obtenerContactosStorage();
    },[]);

    /*const eliminarContacto = id =>{
        const contactosFiltrados = contactos.filter(contacto => contacto.id !== id);
        setContactos(contactosFiltrados);
        guardarContactosStorage
    }*/

    return (
        <View style={styles.body}>
            <View style={styles.headerContactos}>
                <Text style={{ color: 'white', fontSize: 30, }}>Contactos</Text>
            </View>
            <View style={styles.contenido}>
                <View style={styles.contacto}>
                    <View style={styles.info}>
                        <Text style={styles.nombre}>Karens Medrano</Text>
                        <Text style={styles.numero}>78452369</Text>
                    </View>
                    <View style={styles.eliminar}>
                        <View>
                            <TouchableHighlight style={styles.btnEliminar}>
                                <Text style={{ color: 'white' }}>Eliminar</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.botonAgregar}>
                <View style={styles.btnAgregar}>
                    <TouchableHighlight onPress={() => navigation.navigate('NuevoContacto')} style={{ width: '100%', alignItems: 'center', height: '100%', justifyContent: 'space-around', }}>
                        <Text style={styles.textoEliminar}>+</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    );
}
function NuevoContacto({navigation, contactos, setContactos, guardarContactosStorage}) {
    const [nombre, setNombre]=useState('');
    const [apellido, setApellido]=useState('');
    const [numero, setNumero]=useState('');

    const crearContacto =()=>{
        if(nombre.trim()===''||apellido.trim()===''||numero.trim()===''){
            mostrarAlerta();
            return;
        }

        const contacto = { nombre, apellido, numero};
        contacto.id = shortid();

        console.log(contacto);

        const contactoNuevo = [...contactos, contacto];
        setContactos(contactoNuevo);

        guardarContactosStorage(JSON.stringify(contactoNuevo));

    }
    const mostrarAlerta = () =>{
        Alert.alert(
            'ERROR',
            'Todos los campos son obligatorios',
            [{
                text: 'OK'
            }]
        )
    }


    return (
        <View style={styles.body}>
            <View style={styles.headerNuevo}>
                <Text style={styles.titulo}>Agregar Contacto</Text>
            </View>
            <View style={styles.inputsNuevo}>
                <TextInput style={styles.inputNuevo} placeholder='Ingrese el nombre' onChangeText={texto => setNombre(texto)}/>
                <TextInput style={styles.inputNuevo} placeholder='Ingrese el apellido' onChangeText={texto => setApellido(texto)}/>
                <TextInput style={styles.inputNuevo} placeholder='Ingrese el número' keyboardType='numeric' onChangeText={texto => setNumero(texto)}/>
            </View>
            <View style={styles.botonNuevo}>
                <View style={styles.btnNuevo}>
                    <Button title='Agregar contacto' onPress={()=>navigation.navigate('Contactos')}/>
                </View>
            </View>

        </View>
    );
}

const NavigationStack = () => {

    const [contactos, setContactos] = useState([]);

    useEffect(()=>{
        const obtenerContactosStorage = async () =>{
            try{
                const contactosStorage = await AsyncStorage.getItem('contactos');
                if(contactosStorage){
                    setContactos(JSON.parse(contactosStorage));
                }
            }catch(error){
                console.log(error);
            }
            obtenerContactosStorage();
        }
    },[]);

    return (
        //Contenedor de navegación
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen options={{headerShown: false }} name="Login" component={Login} />
                <Stack.Screen name="Registro" component={Registro} options={{ headerShown: false }} />
                <Stack.Screen name="Contactos" options={{ headerShown: false }} component={Contactos} />
                <Stack.Screen name="NuevoContacto" component={NuevoContacto} options={{ headerShown: false}}/>
            </Stack.Navigator>

        </NavigationContainer>
    );
}



export default NavigationStack;


