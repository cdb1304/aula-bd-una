import { InterfacePedido } from '../interface/InterfacePedido';

export interface PropriedadesFormularioPedido {
    idCliente: string;
    setIdCliente: (texto: string) => void;
    idLivro: string;
    setIdLivro: (texto: string) => void;
    dataPedido: string;
    setDataPedido: (texto: string) => void;
    quantidade: string;
    setQuantidade: (texto: string) => void;
    idEdicao: number | undefined;
    salvarDados: (idEdicao: number | undefined, pedido: InterfacePedido) => void;
    limparFormulario: () => void;
}