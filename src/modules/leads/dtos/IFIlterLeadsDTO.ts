interface IFilterLeadsDTO{
    page?:string;
    pageSize?:string;
    type?:string; //'A' = aposentado, 'P' = pensionista
    document?:string // CPF
    gender?:string; // 'M' = masculino 'F'= feminino
    age?:number;
    isDead?:string;// possíveis valores: 'SIM', 'NAO'
}

export {IFilterLeadsDTO}