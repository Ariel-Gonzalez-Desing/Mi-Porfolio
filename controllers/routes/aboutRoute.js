//Express
const express = require('express');
const aboutController = require ('../controllers/aboutController');

//Enrutador
const router = express.Router();

//Requerir MainController
const mainController = require ('../controllers/mainController');

//Enrutar aboutController
router.get('/about', aboutController.about);

//Exportar para app.js
module.exports = router;