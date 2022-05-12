import { JogadoresService } from './../../jogadores/jogadores.service';
import { Jogador } from './../../jogadores/jogador';
import {
    Component,
    Input,
    OnInit,
    Output,
    EventEmitter,
    ViewChild,
} from '@angular/core';

@Component({
    selector: 'app-select-jogadores',
    templateUrl: './select-jogadores.component.html',
    styleUrls: ['./select-jogadores.component.scss'],
})
export class SelectJogadoresComponent implements OnInit {
    public jogadores!: Jogador[];
    @Input() public jogadorAtual: number = 1;
    @Output() public jogadorAtualChange = new EventEmitter<number>();

    constructor(private jogadoresService: JogadoresService) {}

    public ngOnInit(): void {
        const jogadores = this.jogadoresService.getJogadores();
        this.jogadores = jogadores ?? [];
    }

    public atualizaJogadorAtual(): void {
        this.jogadorAtualChange.emit(this.jogadorAtual);
    }
}
