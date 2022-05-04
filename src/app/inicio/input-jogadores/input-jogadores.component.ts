import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-input-jogadores',
    templateUrl: './input-jogadores.component.html',
    styleUrls: ['./input-jogadores.component.scss'],
})
export class InputJogadoresComponent {
    @Input() numJogadores: number = 0;
    @Output() numJogadoresChange = new EventEmitter<number>();

    public inc() {
        if (this.numJogadores < 8) this.numJogadores++;
        this.numJogadoresChange.emit(this.numJogadores);
    }

    public dec() {
        if (this.numJogadores > 0) this.numJogadores--;
        this.numJogadoresChange.emit(this.numJogadores);
    }
}
