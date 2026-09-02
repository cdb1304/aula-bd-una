export interface InterfacePedido {
    id: number | undefined;
    id_cliente: number;
    id_livro: number;
    data_pedido: string;
    quantidade: number;
}