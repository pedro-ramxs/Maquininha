import { JogadoresService } from './../jogadores/jogadores.service';
import { Jogador } from '../jogadores/jogador';

import { Router } from '@angular/router';
import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';

@Component({
    selector: 'app-configuracoes',
    templateUrl: './configuracoes.component.html',
    styleUrls: ['./configuracoes.component.scss'],
})
export class ConfiguracoesComponent implements OnInit, AfterViewInit {
    public jogadores!: Jogador[];

    constructor(
        private jogadoresService: JogadoresService,
        private renderer: Renderer2,
        private router: Router
    ) {}

    ngOnInit(): void {
        const jogadores = this.jogadoresService.getJogadores();
        if (jogadores) {
            this.jogadores = jogadores;
        } else {
            this.router.navigate(['/inicio']);
        }
    }

    ngAfterViewInit(): void {
        this.renderer.selectRootElement('#input1').focus();
    }

    public converteSaldo(saldo: number): string {
        return this.jogadoresService.converteSaldoString(saldo);
    }

    public atualizaJogadores(): void {
        for (let i = 1; i <= this.jogadores.length; i++) {
            this.jogadoresService.setJogador({
                id: i,
                nome: this.renderer.selectRootElement(`#input${i}`).value,
                saldo: this.jogadores[i - 1].saldo,
            });
        }
        this.router.navigate(['/maquininha']);
    }
}
