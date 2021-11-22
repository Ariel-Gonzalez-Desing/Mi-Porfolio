//Express
const express = require('express');
const app = express();

//Rutas Estáticas para linkear archivos del proyecto
app.use(express.static('public'));
app.use(express.static('views'));

//Servidor
const port = 3030;
app.listen(port, () => console.log('Server running in port ' + port))


//Requerir Rutas
const mainRoute  = require('./routes/mainRoute');
const aboutRoute = require('./routes/aboutRoute')


//Iniciar Vistas
app.use(mainRoute);
app.use(aboutRoute);
