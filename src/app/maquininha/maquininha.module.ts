import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaquininhaComponent } from './maquininha.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaquinaComponent } from './maquina/maquina.component';
import { SelectJogadoresComponent } from './select-jogadores/select-jogadores.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';

@NgModule({
    declarations: [
        MaquininhaComponent,
        MaquinaComponent,
        SelectJogadoresComponent,
        ModalComponent,
    ],
    imports: [CommonModule, FontAwesomeModule, RouterModule, FormsModule],
    exports: [MaquininhaComponent],
})
export class MaquininhaModule {}
