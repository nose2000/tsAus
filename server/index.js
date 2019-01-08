const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

const { mongoose } = require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
//en postmant se usa el puerto 3000
app.use(cors({ origin: 'http://localhost:4200' }));

//**  Routes  */
//matenimento 
app.use('/api/carreras', require('./routes/carrera.routes'));
app.use('/api/modalidades', require('./routes/modalidad.routes'));
app.use('/api/procesos', require('./routes/proceso.routes'));  
app.use('/api/requisitos', require('./routes/requisito.routes'));
//suarios
app.use('/api/personas', require('./routes/persona.routes'));
app.use('/api/usuarios', require('./routes/usuario.routes'));
app.use('/api/roles', require('./routes/rol.routes'));
app.use('/api/perroles', require('./routes/perRol.routes'));
//preinscripcion
app.use('/api/preInscripciones', require('./routes/preInscripcion.routes'));
app.use('/api/detalleModPro', require('./routes/detalleModPro.routes'));

//iniciando el servidor 
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});