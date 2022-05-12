import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
    animations: [
        trigger('overlay', [
            transition(':enter', [
                style({ opacity: 0 }),
                animate(150, style({ opacity: 0.5 })),
            ]),
            transition(':leave', [animate(150, style({ opacity: 0 }))]),
        ]),
    ],
})
export class ModalComponent {
    @Input() public mostrar: boolean = false;
}
