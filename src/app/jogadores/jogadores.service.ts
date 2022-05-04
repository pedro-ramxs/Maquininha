import { Jogador } from './jogador';
import { Injectable } from '@angular/core';

const KEY = 'jogadores';

@Injectable({
    providedIn: 'root',
})
export class JogadoresService {
    constructor() {}

    public getJogadores(): Jogador[] | null {
        const jogadores = localStorage.getItem(KEY);
        return jogadores ? (JSON.parse(jogadores) as Jogador[]) : null;
    }

    public setJogador(jogador: Jogador): void {
        const jogadores = this.getJogadores();
        if (!jogadores) {
            localStorage.setItem(KEY, JSON.stringify([jogador]));
            return;
        }
        const novoArray = jogadores.filter(
            (jogadorAtual) => jogadorAtual.id !== jogador.id
        );
        localStorage.setItem(
            KEY,
            JSON.stringify(
                [...novoArray, jogador].sort((j1, j2) => {
                    if (j1.nome > j2.nome) {
                        return 1;
                    }
                    if (j1.nome < j2.nome) {
                        return -1;
                    }
                    return 0;
                })
            )
        );
    }

    public limpar(): void {
        localStorage.clear();
    }

    public converteSaldo(saldo: number): string {
        return saldo > 1000000 ? `${saldo / 1000000}M` : `${saldo / 1000}K`;
    }
}
