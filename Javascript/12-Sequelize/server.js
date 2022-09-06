// import do sequelize
const Sequelize = require('sequelize')

// configuração do sequelize com os dados do banco de dados
const sequelize = new Sequelize(
    'sequelize',
    'root',
    '', 
    {
        host: 'localhost',
        dialect: 'mariadb'
    }
)

/* Teste para autenticação com o banco.
Em caso de sucesso, retorna uma mensagem no console.
Se der erro, retorna uma mensagem no console informando o erro. */
sequelize.authenticate().then(() => {
    console.log('Conexão estabelecida com sucesso');
 }).catch((error) => {
    console.error('Não foi possível estabelecer uma conexão com o banco de dados: ', error);
 });

 // exportando os dados do sequelize
 module.exports = sequelize;