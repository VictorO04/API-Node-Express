import express from "express";
import dotenv from "dotenv";
import batfamilyRouter from "./src/routes/batfamilyRoutes.js";

const app = express();
app.use(express.json());

dotenv.config();
const serverPort = process.env.PORT;

app.get("/", (req, res) => {
    res.send("🚀 Servidor online");
});

app.use("/batfamilia", batfamilyRouter);

app.listen(serverPort, () => {
    console.log(`😎 Servidor funcionando em: http://localhost:${serverPort}`);
});