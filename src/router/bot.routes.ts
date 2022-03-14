import {Router} from "express";
import { LoginBotController } from "../modules/bot/controller/LoginBotController";
import { TalkController } from "../modules/bot/controller/TalkController";

const bot = Router()

const loginBotController = new LoginBotController();
const talkController = new TalkController();

bot.post("/login/:email/:password",loginBotController.handle);
bot.post("/talk/:bot_id/:user_id",talkController.handle)

export {bot}