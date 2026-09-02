import { InterfaceCliente } from '../interface/InterfaceCliente';

export interface PropriedadesFormularioCliente {
    nome: string;
    setNome: (texto: string) => void;
    email: string;
    setEmail: (texto: string) => void;
    dataCadastro: string;
    setDataCadastro: (texto: string) => void;
    idEdicao: number | undefined;
    salvarDados: (idEdicao: number | undefined, cliente: InterfaceCliente) => void;
    limparFormulario: () => void;
}