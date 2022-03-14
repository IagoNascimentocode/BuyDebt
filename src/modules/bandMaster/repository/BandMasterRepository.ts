import axios from "axios";
import { ILoginBandMasterDTO } from "../dtos/ILoginBandMasterDTO";
import { ISendButtonsDTO } from "../dtos/ISendButtonsDTO";
import { ISendTextDTO } from "../dtos/ISendTextDTO";
import { IBandMasterRepository } from "./IBandMasterRepository";

class BandMasterRepository implements IBandMasterRepository{
    
    async login({ username, password }: ILoginBandMasterDTO): Promise<any> {
        
        const BearerToken =  await axios.post("https://admin.2bebandmaster.com.br/authentication",{
            username:username,
            password:password
        })
        .then(token =>{
            return token
        })
        .catch (err =>{
            throw new Error(err)
        })

        return BearerToken
    }
    
    async sendText({ identifier, authorization, phone, type, text }: ISendTextDTO): Promise<any> {
        
        const response = await axios.post("https://message.2bebandmaster.com.br/message",{
            phone:`${phone}`,
            type:`${type}`,
            text:`${text}`
        },{
        headers:{
            identifier:`${identifier}`,
            Authorization:`Bearer ${authorization}`
        }
        })
        .then(response =>{
            console.log(response.data)
            return response.data
        })
        .catch(err => {
            console.log(err)
            throw new Error(err)
        })

        return response
    }
    
    async sendButtons({ identifier, authorization, phone, urlImage, subTitle, id_1, title_1, id_2, title_2 }: ISendButtonsDTO): Promise<any> {
        
        const response = await axios.post("https://message.2bebandmaster.com.br/message",
        {
            "phone": `${phone}`,
            "type": "interactive",
            "interactive": {
                "type": "button",
                "header": {
                "type": "image",
                "image": {
                    "link": "https://digilandia.io/wp-content/uploads/2020/07/Como-usar-o-WhatsApp-para-videoconfer%C3%AAncias.jpg"
                }
                },
                "body": {
                "text": `${subTitle}`
                },
                "action": {
                "buttons": [
                    {
                    "type": "reply",
                    "reply": {
                        "id": `${id_1}`,
                        "title": `${title_1}`
                    }
                    },
                    {
                    "type": "reply",
                    "reply": {
                        "id": `${id_2}`,
                        "title": `${title_2}`
                    }
                    }
                ]
                }
            }
        },
        {
            headers:{
                identifier:`${identifier}`,
                authorization:`${authorization}`
            }
        })
        .then(response =>{
            console.log(response)
            return response
        })
        .catch(err => {
            throw new Error(err)
        })

        return response

    }
    
}
export {BandMasterRepository}