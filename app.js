const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const eventoRoutes = require('./routes/eventoRoutes'); // Importa o arquivo de rotas de cursos


app.use(express.static('public')); // Serve arquivos estáticos da pasta 'public'
app.use(express.json()); // Middleware para parsear requisições com JSON
app.use(express.urlencoded({ extended: false })); // Middleware para parsear requisições com dados URL-encoded
app.use(eventoRoutes); // Usa as rotas de cursos


// Define a rota principal para a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html', 'index.html'));
});

app.get('/editar', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/html', 'edit.html'));
});


// Inicia o servidor na porta definida
app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});