const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'projeto_livro',
});

// Estabelecendo a conexão
conn.connect((error) => {
    if (error) {
        console.error('Erro de conexão: ' + error.stack);
        return;
    }
    console.log('Conectado ao MySQL com o ID: ' + conn.threadId);
});

// Exportando a conexão para uso em outros arquivos
module.exports = conn;
