import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';
import { MaquininhaComponent } from './maquininha/maquininha.component';
import { InicioComponent } from './inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'inicio',
        component: InicioComponent,
    },
    {
        path: 'maquininha',
        component: MaquininhaComponent,
    },
    {
        path: 'configuracoes',
        component: ConfiguracoesComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
