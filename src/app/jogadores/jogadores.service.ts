import { Jogador } from './jogador';
import { Injectable } from '@angular/core';

const KEY = 'jogadores';

@Injectable({
    providedIn: 'root',
})
export class JogadoresServiceService {
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
        localStorage.setItem(KEY, JSON.stringify([...jogadores, jogador]));
    }

    public limpar(): void {
        localStorage.clear();
    }
}
