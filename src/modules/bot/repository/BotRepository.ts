import axios from "axios";
import { response } from "express";
import { ILoginDTO } from "../dtos/ILoginDTO";
import { IBotRepository } from "./IBotRepository";

class BotRepository implements IBotRepository{

    async login({ email, password }: ILoginDTO): Promise<any> {
        

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
    

}

export {BotRepository}
