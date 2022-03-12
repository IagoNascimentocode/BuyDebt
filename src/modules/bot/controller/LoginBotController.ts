import { Request, Response } from "express";
import { BotRepository } from "../repository/BotRepository"

class LoginBotController {

    async handle(request:Request,response:Response):Promise<Response>{

        const {email,password} = request.params;

        const botRepository = new BotRepository();

        const token = await botRepository.login({email,password});
    
        return response.status(200).json(token);
    }   
}

export {LoginBotController}