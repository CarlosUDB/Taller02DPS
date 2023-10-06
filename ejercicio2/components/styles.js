import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    //Para login
    body: {
        flex: 1,
        alignItems: 'center',
        //backgroundColor:'green',
    },
    nocuenta:{
        flexDirection:'row',
        alignItems:'center',
    },
    header:{
        //backgroundColor:'teal',
        flex:1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    titulo:{
        color: 'black',
        fontSize: 30,
        //padding:15,
    },
    inputs:{
        //backgroundColor:'navy',
        flex:1,
        width: '100%',
        alignItems: 'center',
        //justifyContent: 'space-around',
        
    },
    input:{
        backgroundColor: '#D1D1D1',
        width: 250,
        height: 40,
        marginTop:60,
        borderRadius: 10,
    },
    btnLogin:{
        flex:1,
        width: '100%',
        //backgroundColor: '#FF5733',
        alignItems: 'center',
        //justifyContent: 'space-around',
    },
    boton:
    {
        width: '60%',
    },

    // ******** Para resgistro ***** \\
    teminos:{
        flexDirection:'row',
        alignItems:'center',
    },
    headerRegistro:{
        //backgroundColor:'teal',
        //flex:1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        height:'20%',
    },
    titulo:{
        color: 'black',
        fontSize: 30,
        //padding:15,
    },
    inputsRegistro:{
        //backgroundColor:'navy',
        //flex:1,
        width: '100%',
        alignItems: 'center',
        height:'50%',
        //justifyContent: 'space-around',
        
    },
    inputRegistro:{
        backgroundColor: '#D1D1D1',
        width: 300,
        height: 40,
        marginTop:40,
        borderRadius: 10,
    },
    btnRegistro:{
        //flex:1,
        width: '100%',
        //backgroundColor: '#FF5733',
        alignItems: 'center',
        //justifyContent: 'space-around',
        height:'40%',
    },
    boton:
    {
        width: '70%',
        
        
    },

    /**** Para contactos ****/
    headerContactos:{
        backgroundColor: 'blue',
        width:'100%',
        alignItems: 'center',
        height:'20%',
        justifyContent:'space-around',
        borderBottomLeftRadius:40,
        borderBottomRightRadius:40,
    },
    contenido:{
        //backgroundColor:'teal',
        height:'70%',
        width: '100%',
    },
    botonAgregar:{
        //backgroundColor:'navy',
        height:'10%',
        width: '100%',
        alignItems: 'flex-end',
    },
    btnAgregar:{
        width: 50,
        height: 50,
        borderRadius: 100 / 2,
        backgroundColor: "blue",
        alignItems:'center',
        justifyContent: 'space-around',
    },
    textoEliminar:{
        color: 'white',
    },
    contacto:{
        flexDirection:'row',
        //backgroundColor: 'black',
        width:'100%',
        borderBottomWidth: 2,
    },
    info:{
        //backgroundColor:'green',
        width: '60%',
        padding:15,
    },
    eliminar:{
        //backgroundColor:'yellow',
        width:'40%',
        padding:15,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    btnEliminar:{
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderRadius: 10,
        height:25,
        width:70,
    },
    nombre:{
        fontSize:20,
    },

    /*****    Para boton agregar   *****/
    headerNuevo:{
        //backgroundColor:'teal',
        width: '100%',
        height: '15%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    inputsNuevo:{
        //backgroundColor:'green',
        width: '100%',
        height: '40%',
        flexDirection: 'column',
        alignItems: "center",
    },
    inputNuevo:{
        backgroundColor: '#D1D1D1',
        width: 250,
        height: 40,
        marginTop:40,
        borderRadius: 10,
    },
    botonNuevo:{
        //backgroundColor:'coral',
        width: '100%',
        height: '55%',
        alignItems: 'center'
    },
    btnNuevo:{width:'65%',},
})

export default styles;