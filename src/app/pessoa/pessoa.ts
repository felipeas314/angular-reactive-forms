import { Telefone } from "./telefone";

export interface Pessoa {

    primeiroNome: string;

    ultimoNome: string;

    telefones: Telefone[];
}
