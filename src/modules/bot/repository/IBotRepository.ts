import { ILoginBotPressDTO } from "../dtos/ILoginBotPressDTO";
import { ITalkDTO } from "../dtos/ITalkDTO";

interface IBotRepository{
    login({email,password}:ILoginBotPressDTO):Promise<any>;
    talk({bot_id,user_id,text,token}:ITalkDTO):Promise<any>;
}
export {IBotRepository}