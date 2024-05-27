class Evento {
    // Construtor da classe Evento, inicializa um array vazio para armazenar os eventos
    constructor() {
        this.eventos = [];
    }

    // Método para obter todos os eventos
    getAllEventos() {
        return this.eventos; // Retorna o array de eventos
    }

    // Método para criar um novo evento
    createEvento(titulo, description, data, local, criadoEm, atualizadoEm) {
        // Cria um novo objeto de evento com os dados fornecidos
        const newEvento = { id: this.eventos.length + 1, titulo, description, data, local, criadoEm, atualizadoEm };
        this.eventos.push(newEvento); // Adiciona o novo evento ao array de eventos
        return newEvento; // Retorna o novo evento criado
    }

    // Método para obter um evento pelo ID
    getEventoById(id) {
        // Encontra e retorna o evento que tem o ID correspondente
        return this.eventos.find(evento => evento.id === parseInt(id));
    }

    // Método para deletar um evento pelo ID
    deleteEvento(id) {
        // Encontra o índice do evento no array pelo ID
        const index = this.eventos.findIndex(evento => evento.id === parseInt(id));
        if (index !== -1) {
            // Remove o evento do array e retorna o evento deletado
            return this.eventos.splice(index, 1)[0];
        }
        return null; // Retorna null se o evento não foi encontrado
    }

    // Método para atualizar um evento pelo ID
    updateEvento(id, titulo, description, data, local, criadoEm, atualizadoEm) {
        // Obtém o evento pelo ID
        const evento = this.getEventoById(id);
        if (evento) {
            // Atualiza as propriedades do evento com os novos valores
            evento.titulo = titulo;
            evento.description = description;
            evento.data = data;
            evento.local = local;
            evento.criadoEm = criadoEm; // Mantém a data de criação original
            evento.atualizadoEm = atualizadoEm; // Atualiza a data de atualização
            return evento; // Retorna o evento atualizado
        }
        return null; // Retorna null se o evento não foi encontrado
    }
}

// Exporta a classe Evento para ser usada em outros módulos
module.exports = Evento;
