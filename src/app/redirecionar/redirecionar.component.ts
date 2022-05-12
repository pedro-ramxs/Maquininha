import { Router } from '@angular/router';
import { JogadoresService } from './../jogadores/jogadores.service';
import { Component, OnInit } from '@angular/core';
import { Jogador } from '../jogadores/jogador';

@Component({
    selector: 'app-redirecionar',
    templateUrl: './redirecionar.component.html',
    styleUrls: ['./redirecionar.component.scss'],
})
export class RedirecionarComponent implements OnInit {
    public jogadores!: Jogador[];
    constructor(
        private jogadoresService: JogadoresService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.jogadores = this.jogadoresService.getJogadores();
    }

    public converteSaldo(valor: number): string {
        return this.jogadoresService.converteSaldoString(valor);
    }

    public recomecar(): void {
        this.jogadoresService.limpar();
        this.router.navigate(['/inicio']);
    }
}
