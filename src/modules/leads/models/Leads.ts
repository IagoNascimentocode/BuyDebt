interface Leads {
    type: string;
	document: string;
	name: string;
	gender: string;
	birthDate: string;
	age: string;
	isDead: string;
	estimatedIncome: string;
	addresses: [
		{
			streetType: string;
			streetName: string;
			residenceNumber: string;
			complement: string;
			neighborhood: string
			city: string;
			uf: string;
			cep: string
		},
	],
	contacts: [
		{
			telephone: string;
			cellphone: string;
			email: string;
		},
	],
	relatives?: [
		{
			type: number;
			name: string;
			document: string;
			contacts?: [
				{
					telephone?: string,
					cellphone?: string
				},
			]
		},
	]
}

export {Leads}