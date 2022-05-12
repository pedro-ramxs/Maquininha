export interface Operacao {
    /*
        1: soma;
        2: subtracao;
        3: troca;
    */
    tipo: number;
    valor: number;
    destinatarioId?: number;
}
