import axios from "axios";
import { Leads } from "../models/Leads";
import { IFilterLeadsDTO } from "../dtos/IFIlterLeadsDTO";
import { ILeadsRepository } from "./ILeadsRepository";
import { leads } from "../../../router/leads.routes";


class LeadsRepository implements ILeadsRepository{

    async filterLeads({page,pageSize,type,isDead,age,document,gender}: IFilterLeadsDTO): Promise<Leads[]> {

        let url = `https://laguz-gateway-hml.viptech.com.br/leads/list?page=${page}&pageSize=${pageSize}&`

        if(type){
            url = url.concat(`filters=type:${type}`)
        }
        if(isDead){
            url = url.concat(`filters=isDead:${isDead}`)
        }
        if(age){
            url = url.concat(`filters=age:${age}`)
        }
        if(document){
            url = url.concat(`filters=document:${document}`)
        }
        if(gender){
            url =url.concat(`filters=gender:${gender}`)
        }        
        console.log(url)
        const leads = await axios.get(`${url}`)
        .then(async response => {

            console.log(response.data.data.leads)
            return response.data.data.leads
        })
        .catch(err => {
            
            throw new Error(err)
        
        })
        return leads
    }
}

export {LeadsRepository}