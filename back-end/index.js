import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import rotas from './routes/index.js';


dotenv.config()
const app = express();

//liberar qualquer acesso (domínio/IP)
app.use(cors())
app.use(express.json())

rotas(app)

app.listen(3001)
console.log("Servidor Iniciado")

