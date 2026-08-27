import { InterfaceLivro } from '../interface/interfaceLivro';

export interface PropriedadesLivro {
   item: InterfaceLivro;
   iniciarEdicao: (livro: InterfaceLivro) => void;
   excluirLivro: (id: number | undefined) => void;
}