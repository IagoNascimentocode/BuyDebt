import { Request, Response } from "express"
import { LeadsRepository } from "../repository/LeadsRepository";

class FilterLeadsController {

    async handle(request:Request,response:Response):Promise<Response>{
        const {page,pageSize} = request.params;
        const { type, document, gender, age, isDead } = request.body;
        
        const leadsRepository = new LeadsRepository();

        const leads = await leadsRepository.filterLeads({page,pageSize,type,isDead,age,document,gender})

        return response.status(200).json(leads)
    }

}

export {FilterLeadsController}
