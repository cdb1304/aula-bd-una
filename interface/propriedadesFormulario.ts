import { InterfaceLivro } from '../interface/interfaceLivro';

export interface PropriedadesFormulario {
   titulo: string;
   setTitulo: (texto: string) => void;
   autor: string;
   setAutor: (texto: string) => void;
   preco: string;
   setPreco: (texto: string) => void;
   estoque: string;
   setEstoque: (texto: string) => void;
   idEdicao: number | undefined;
   salvarDados: (idEdicao: number | undefined, livro: InterfaceLivro) => void;
   limparFormulario: () => void;
}