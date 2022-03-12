import {Router} from "express";
import { LoginBotController } from "../modules/bot/controller/LoginBotController";

const bot = Router()

const loginBotController = new LoginBotController();

bot.post("/login/:email/:password",loginBotController.handle)

export {bot}