import { JogadoresService } from './../jogadores/jogadores.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-inicio',
    templateUrl: './inicio.component.html',
    styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent {
    constructor(
        private jogadoresService: JogadoresService,
        private router: Router
    ) {}
    public numJogadores: number = 0;

    public comecar(): void {
        this.setJogadoresInicial();
        this.router.navigate(['/configuracoes']);
    }

    private setJogadoresInicial(): void {
        for (let i = 1; i <= this.numJogadores; i++) {
            this.jogadoresService.setJogador({
                id: i,
                nome: `Jogador ${i}`,
                saldo: 15000000,
            });
        }
    }
}
