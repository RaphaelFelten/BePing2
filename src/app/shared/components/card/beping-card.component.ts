import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'beping-card',
    templateUrl: './beping-card.component.html',
    styleUrls: ['./beping-card.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class BepingCardComponent implements OnInit {
    @Input() padding = true;
    @Input() faded = false;
    @Input() marging = true;
    @Input() height;
    @Input() margingVertical = true;
    @Input() highlighted = false;

    constructor() {
    }

    ngOnInit() {
    }

}
