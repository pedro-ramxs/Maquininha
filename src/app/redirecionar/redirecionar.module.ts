import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RedirecionarComponent } from './redirecionar.component';

@NgModule({
    declarations: [RedirecionarComponent],
    imports: [CommonModule, RouterModule],
    exports: [RedirecionarComponent],
})
export class RedirecionarModule {}
