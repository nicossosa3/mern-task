//Archivo para inicializar el servidor
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const { mongoose } = require('./database');

const app = express();



//Settings
//Toma el puerto que le esta dando el servicio
//o que tome el puerto por defecto 3000 
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());


//Routes
app.use('/api/tasks',require('./routes/task.routes'));
//Static Files
app.use(express.static(path.join(__dirname, 'public')))

//Starting the server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
}); 