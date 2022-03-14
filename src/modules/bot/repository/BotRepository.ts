import axios from "axios";
import { ILoginBotPressDTO } from "../dtos/ILoginBotPressDTO";
import { ITalkDTO } from "../dtos/ITalkDTO";
import { IBotRepository } from "./IBotRepository";

class BotRepository implements IBotRepository{
    
    async login({ email, password }: ILoginBotPressDTO): Promise<any> {
        
        
        const token = await axios.post("http://localhost:3000/api/v1/auth/login/basic/default",
        {
            email:email,
            password:password
        })
        .then(response => {
            console.log(response.data.payload.jwt)
            return response.data.payload.jwt
        })
        .catch(err => {
            throw new Error(err)
        })
        
        return token
    }
    
    async talk({bot_id,text,user_id,token}:ITalkDTO): Promise<any> {

        if(token){

        const response = await axios.post(`http://localhost:3000/api/v1/bots/${bot_id}/converse/${user_id}/secured?include=nlu,state,suggestions,decision`,{
            text:`${text}`
        },{
        headers:{
            Authorization:`Bearer ${token}`
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
        else {
        const response = await axios.post(`http://localhost:3000/api/v1/bots/${bot_id}/converse/${user_id}`,{
            text:`${text}`
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
    }

}

export {BotRepository}
