// Importa o controlador de eventos
const eventoController = require('../controllers/eventoController');
const express = require('express');
const router = express.Router();

// Define a rota para listar todos os eventos
router.get('/eventos', eventoController.getAllEventos);

// Define a rota para buscar um evento pelo ID
router.get('/eventos/:id', eventoController.getEventoById);

// Define a rota para criar um novo evento
router.post('/eventos/create', eventoController.createEvento);

// Define a rota para atualizar um evento pelo ID
router.put('/eventos/:id', eventoController.updateEvento);

// Define a rota para deletar um evento pelo ID
router.delete('/eventos/:id', eventoController.deleteEvento);

// Exporta o roteador para ser usado no app principal
module.exports = router;
