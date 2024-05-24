// Importa a classe Evento do modelo
const Evento = require('../models/evento');
const eventoModel = new Evento();

// Classe EventoController para gerenciar as operações dos eventos
class EventoController {
    // Método para retornar todos os eventos
    getAllEventos(req, res) {
        const eventos = eventoModel.getAllEventos();
        res.json(eventos);
    }

    // Método para criar um novo evento
    createEvento(req, res) {
        const { titulo, description, data, local, criadoEm, atualizadoEm } = req.body;
        const newEvento = eventoModel.createEvento(titulo, description, data, local, criadoEm, atualizadoEm);
        res.status(201).redirect('/');
    }

    // Método para buscar um evento pelo ID
    getEventoById(req, res) {
        const eventoId = req.params.id;
        const evento = eventoModel.getEventoById(eventoId);
        if (!evento) {
            return res.status(404).json({ msg: 'Evento não encontrado' });
        }
        res.json(evento);
    }

    // Método para deletar um evento pelo ID
    deleteEvento(req, res) {
        const eventoId = req.params.id;
        const eventoDeleted = eventoModel.deleteEvento(eventoId);
        if (!eventoDeleted) {
            return res.status(404).json({ msg: 'Evento não encontrado' });
        }
        res.json({ msg: 'Evento deletado com sucesso' });
    }

    // Método para atualizar um evento pelo ID
    // updateEvento(req, res) {
    //     const eventoId = req.params.id;
    //     const { titulo, description, data, local, criadoEm, atualizadoEm } = req.body;
    //     const eventoUpdate = eventoModel.updateEvento(eventoId, titulo, description, data, local, criadoEm, atualizadoEm);
    //     if (!eventoUpdate) {
    //         return res.status(404).json({ msg: 'Evento não encontrado' });
    //     }
    //     res.json(eventoUpdate);
    // }

    updateEvento(req, res) {
        const eventoId = req.params.id;
        const { titulo, description, data, local } = req.body;
        const evento = eventoModel.getEventoById(eventoId);

        if (!evento) {
            return res.status(404).json({ msg: 'Evento não encontrado' });
        }

        const criadoEm = evento.criadoEm; // Mantém a data de criação original
        const atualizadoEm = new Date().toISOString().split("T")[0]; // Atualiza a data de atualização para a data atual

        const eventoUpdate = eventoModel.updateEvento(eventoId, titulo, description, data, local, criadoEm, atualizadoEm);
        if (!eventoUpdate) {
            return res.status(404).json({ msg: 'Erro ao atualizar o evento' });
        }
        res.json(eventoUpdate);
    }
}

// Exporta uma instância do controlador para ser usada em outros módulos
module.exports = new EventoController();
