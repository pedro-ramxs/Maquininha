import { Router } from '@angular/router';
import { JogadoresService } from './../jogadores/jogadores.service';
import { Operacao } from './../jogadores/operacao';
import { Component } from '@angular/core';
import {
    faGear,
    faUser,
    faArrowLeftLong,
} from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-maquininha',
    templateUrl: './maquininha.component.html',
    styleUrls: ['./maquininha.component.scss'],
})
export class MaquininhaComponent {
    public icons = { config: faGear, user: faUser, arrow: faArrowLeftLong };
    public jogadorSelecionado: number = 1;
    constructor(
        private jogadoresService: JogadoresService,
        private router: Router
    ) {}

    public handleOperacao(op: Operacao): void {
        const jogador = this.jogadoresService.getJogadorById(
            parseInt(this.jogadorSelecionado.toString())
        );
        if (op.tipo === 1) {
            jogador.saldo += op.valor;
        } else if (op.tipo === 2) {
            if (op.valor <= jogador.saldo) {
                jogador.saldo -= op.valor;
            }
        } else if (op.tipo === 3 && op.destinatarioId) {
            if (op.valor <= jogador.saldo) {
                const destinatario = this.jogadoresService.getJogadorById(
                    op.destinatarioId
                );
                jogador.saldo -= op.valor;
                destinatario.saldo += op.valor;
                this.jogadoresService.setJogador(destinatario);
            }
        }
        this.jogadoresService.setJogador(jogador);
    }

    public recomecar(): void {
        this.jogadoresService.limpar();
        this.router.navigate(['/inicio']);
    }
}
