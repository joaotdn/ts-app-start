// Supondo que tenha que imprimir uma nota
// e não diferenciar se é pessoa ou empresa
export interface CustomerOrder {
  getName(): string;
  getDoc(): string;
}

export interface IndividualCustomerProtocol {
  firstname: string;
  lastname: string;
  cpf: string;
}

export interface EnterpriseCustomerProtocol {
  name: string;
  cnpj: string;
}
