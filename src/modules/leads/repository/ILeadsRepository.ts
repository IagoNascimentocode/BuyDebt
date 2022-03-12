import { IFilterLeadsDTO } from "../dtos/IFIlterLeadsDTO";
import { Leads } from "../models/Leads";

interface ILeadsRepository{

   filterLeads({ type,document,gender,age,isDead }:IFilterLeadsDTO):Promise<Leads[]>;

}

export {ILeadsRepository}