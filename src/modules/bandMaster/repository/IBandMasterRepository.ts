import { ILoginBandMasterDTO } from "../dtos/ILoginBandMasterDTO";
import { ISendButtonsDTO } from "../dtos/ISendButtonsDTO";
import { ISendTextDTO } from "../dtos/ISendTextDTO";

interface IBandMasterRepository {
    login({username,password}:ILoginBandMasterDTO):Promise<any>;
    sendText({identifier,authorization,phone,type,text}:ISendTextDTO):Promise<any>;
    sendButtons({identifier,authorization,phone,urlImage,subTitle,id_1,title_1,id_2,title_2}:ISendButtonsDTO):Promise<any>;
}

export {IBandMasterRepository}