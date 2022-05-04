import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { InputJogadoresComponent } from './input-jogadores/input-jogadores.component';

@NgModule({
    declarations: [InicioComponent, InputJogadoresComponent],
    imports: [CommonModule],
    exports: [InicioComponent],
})
export class InicioModule {}
