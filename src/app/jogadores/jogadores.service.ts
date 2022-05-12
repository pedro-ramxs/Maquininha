import { Jogador } from './jogador';
import { Injectable } from '@angular/core';

const KEY = 'jogadores';
let jogadores: Jogador[] = [];

@Injectable({
    providedIn: 'root',
})
export class JogadoresService {
    constructor() {}

    public getJogadores(): Jogador[] {
        const jogadoresLS = this.getJogadoresLocalStorage();
        return jogadoresLS ? jogadoresLS : jogadores;
    }

    public getJogadorById(id: number): Jogador {
        return jogadores.filter((jogador) => jogador.id == id)[0];
    }

    private getJogadoresLocalStorage(): Jogador[] | null {
        if (window.localStorage) {
            const jogadoresLS = localStorage.getItem(KEY);
            return jogadoresLS ? JSON.parse(jogadoresLS) : null;
        }
        return null;
    }

    public setJogador(jogador: Jogador): void {
        const novoArray = jogadores.filter(
            (jogadorAtual) => jogadorAtual.id !== jogador.id
        );
        jogadores = [...novoArray, jogador];
        if (window.localStorage) {
            localStorage.setItem(KEY, JSON.stringify(jogadores));
        }
    }

    public limpar(): void {
        jogadores = [];
        if (window.localStorage) {
            localStorage.clear();
        }
    }

    public converteSaldoString(saldo: number): string {
        return saldo > 1000000 ? `${saldo / 1000000}M` : `${saldo / 1000}K`;
    }

    public converteSaldoNumber(saldo: string): number {
        if (saldo.endsWith('K')) {
            const valor = parseFloat(saldo.split('K')[0]);
            return valor * 1000;
        }
        const valor = parseFloat(saldo.split('M')[0]);
        return valor * 1000000;
    }
}
