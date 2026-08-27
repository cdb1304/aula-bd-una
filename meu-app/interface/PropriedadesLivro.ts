import { InterfaceLivro } from '../interface/InterfaceLivro';

export interface PropriedadesLivro {
   item: InterfaceLivro;
   iniciarEdicao: (livro: InterfaceLivro) => void;
   excluirLivro: (id: number | undefined) => void;
}