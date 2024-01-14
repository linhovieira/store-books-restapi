import express from 'express';
import openAndGetConnection from './configurations/db-configuration.js';
import routes from './routes/index.js';
import listenerErrors from './middlewares/error-handler.js';
import listenerError404 from './middlewares/error-not-found.js';

const dbConnection = await openAndGetConnection();
dbConnection.once('open', () => console.log('A conexão com banco de dados foi estabelecida com sucesso!'));
dbConnection.on('error', (error) => {
    console.error('Ocorreu um erro na tentativa de abrir uma conexão com banco de dados!');
    console.error('Erro: ', error);
});

const app = express();
routes(app);
app.use(listenerErrors, listenerError404);

export default app;