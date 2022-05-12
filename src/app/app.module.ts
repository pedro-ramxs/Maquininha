import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InicioModule } from './inicio/inicio.module';
import { MaquininhaModule } from './maquininha/maquininha.module';
import { ConfiguracoesModule } from './configuracoes/configuracoes.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        InicioModule,
        MaquininhaModule,
        ConfiguracoesModule,
        AppRoutingModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
