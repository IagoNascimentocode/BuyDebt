import { ILoginDTO } from "../dtos/ILoginDTO"

interface IBotRepository{

    login({email,password}:ILoginDTO):Promise<any>;
}
export {IBotRepository}