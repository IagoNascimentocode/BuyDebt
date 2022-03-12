import {Router} from "express";
import { FilterLeadsController } from "../modules/leads/controller/FilterLeadsController";

const leads = Router();
const filterLeadsController = new FilterLeadsController();
leads.get("/filter/:page/:pageSize",filterLeadsController.handle)

export {leads}