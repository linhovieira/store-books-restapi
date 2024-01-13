import * as https from 'https';
import * as fs from 'fs';
import 'dotenv/config';
import app from './src/app.js';

const PORT = 3000;
const CERT_PATH = process.env.CERTS_HOME;
const OPTIONS = {
    key: fs.readFileSync(`${CERT_PATH}/server-key.pem`),
    cert: fs.readFileSync(`${CERT_PATH}/server.pem`)
};

https
    .createServer(OPTIONS, app)
    .listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));