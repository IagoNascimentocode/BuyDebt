import { Request, Response } from "express"
import api from "../../../services/ApiBotPress"
import { BotRepository } from "../repository/BotRepository"

class TalkController {
    
    async handle(request:Request,response:Response):Promise<Response>{
        
        const {bot_id,user_id} = request.params;

        const {text,token} = request.body;
        
        const botRepository = new BotRepository();

        const botResponse = await botRepository.talk({bot_id,user_id,text,token})
        
        

        return response.status(200).json(botResponse)
    }

}

export {TalkController}