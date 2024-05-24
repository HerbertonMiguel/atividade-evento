class Evento {
    constructor() {
        this.eventos = [];
    }

    getAllEventos() {
        return this.eventos;
    }

    createEvento(titulo, description, data, local, criadoEm, atualizadoEm) {
        const newEvento = { id: this.eventos.length + 1, titulo, description, data, local, criadoEm, atualizadoEm };
        this.eventos.push(newEvento);
        return newEvento;
    }

    getEventoById(id) {
        return this.eventos.find(evento => evento.id === parseInt(id));
    }

    deleteEvento(id) {
        const index = this.eventos.findIndex(evento => evento.id === parseInt(id));
        if (index !== -1) {
            return this.eventos.splice(index, 1)[0];
        }
        return null;
    }

    updateEvento(id, titulo, description, data, local, criadoEm, atualizadoEm) {
        const evento = this.getEventoById(id);
        if (evento) {
            evento.titulo = titulo;
            evento.description = description;
            evento.data = data;
            evento.local = local;
            evento.criadoEm = criadoEm; // Mantém a data de criação original
            evento.atualizadoEm = atualizadoEm; // Atualiza a data de atualização
            return evento;
        }
        return null;
    }
}

module.exports = Evento;
