import { ModalComponent } from './../modal/modal.component';
import { JogadoresService } from './../../jogadores/jogadores.service';
import { Operacao } from './../../jogadores/operacao';
import {
    Component,
    Input,
    Output,
    EventEmitter,
    ViewChild,
} from '@angular/core';

@Component({
    selector: 'app-maquina',
    templateUrl: './maquina.component.html',
    styleUrls: ['./maquina.component.scss'],
})
export class MaquinaComponent {
    @Input() public icons: any;
    @Output() public novaOperacao = new EventEmitter<Operacao>();
    @ViewChild('modalDestinatario') modal!: ModalComponent;
    public jogadorAtualTroca: number = 1;

    public valor: string = '0';
    constructor(private jogadoresService: JogadoresService) {}

    public digita(valor: string): void {
        if (!this.valor.includes('M')) {
            if (!this.valor.includes('K')) {
                if (this.valor === '0') {
                    if (valor !== 'M' && valor !== 'K') {
                        this.valor = valor;
                    }
                } else if (valor === '.') {
                    if (!this.valor.includes('.')) {
                        this.valor += valor;
                    }
                } else {
                    this.valor += valor;
                }
            }
        }
    }

    public limpa(): void {
        this.valor = '0';
    }

    public criaNovaOperacao(tipo: number) {
        if (this.valor.endsWith('M') || this.valor.endsWith('K')) {
            this.novaOperacao.emit({
                tipo,
                valor:
                    tipo === 11
                        ? 2000000
                        : this.jogadoresService.converteSaldoNumber(this.valor),
                destinatarioId: tipo === 3 ? this.jogadorAtualTroca : undefined,
            });
            this.modal.mostrar = false;
            this.valor = '0';
        } else if (tipo === 11) {
            this.novaOperacao.emit({ tipo: 1, valor: 2000000 });
        }
    }

    public handleTroca() {
        if (this.valor.endsWith('M') || this.valor.endsWith('K')) {
            this.modal.mostrar = true;
        }
    }
}
