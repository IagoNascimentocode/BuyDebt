import express from "express";
import { bot } from "./router/bot.routes";
import { leads } from "./router/leads.routes";

const app = express();

app.use(express.json())
app.use(leads)
app.use(bot)
app.listen(1900,()=>{console.log("Server is runnig port 1900")})