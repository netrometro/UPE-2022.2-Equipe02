import express from "express";
import cors from "cors";
import dotenv from "dotenv";


dotenv.config()
const app = express();

//liberar qualquer acesso (domínio/IP)
app.use(cors())
app.use(express.json())

/* require("../src/routes/index")(app) */

try {
    app.listen(3000)
    console.log("Servidor iniciado")
} catch (error) {
    console.log(error)
}

