const express = require ('express')
const morgan =require ('morgan') /* Middleware */
const cors = require('cors') /* Middleware */

const app =express();

/* Configurando o asignando pueto a servidor */
app.set('Port',4000)

/* Morgan sirve saber que tipo de peticiones está recibiendo nuestro servidor */
app.use(morgan('dev'));
/* Express y json nos sirve para convertir datos a json y leerlos adecuadamente */
app.use(express.urlencoded({extended:true}));
app.use(express.json());
/* cors nos sirve para permitir conexiones desde cualquier cliente */
app.use(cors({origin:'*'}));
require('./database')



/* Rutas o vistas */
/* app.use('/api/test', require('./routes/test.route')); */
// la ruta de las notas? no la tengo profe creo que me falto
// asi no te va a funcionar, no te va a guardar, eliminar, actualizar las notas, no encuentra la ruta el frontend entiendo, profe desde que parte est, voy a volver a ver el video me salte alguna parte

app.use('/user',require('./routes/user.route')); 

/* iniciando nuestro servidor */
app.listen(app.get('Port'),()=>{
   console.log('Servidor corriendo en puerto:',app.get('Port'))
    
})

/* 
const json ={
   name:"Andres",
   lastname:"Monsalve",
   salary: 100,
   days:[1,2,3,4,5,6,7]
} */