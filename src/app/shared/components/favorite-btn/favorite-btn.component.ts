import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {createAnimation, IonIcon} from '@ionic/angular';

@Component({
    selector: 'beping-favorite-btn',
    templateUrl: './favorite-btn.component.html',
    styleUrls: ['./favorite-btn.component.scss']
})
export class FavoriteBtnComponent implements OnInit {

    @Input() enabled = false;
    @Output() clicked: EventEmitter<boolean> = new EventEmitter<boolean>();

    @ViewChild('starIcon') starIcon: IonIcon;

    constructor() {
    }

    ngOnInit() {
        console.log(this.starIcon);
    }

    btnClicked() {
        this.clicked.emit();
        console.log(this.starIcon);

        const rotation = 60;
        const rotationCnt = 1;

        const squareA = createAnimation()
            // @ts-ignore
            .addElement(this.starIcon.el)
            .duration(200)
            .easing('ease-in-out')
            .keyframes([
                {offset: 0, transform: 'rotate(' + (this.enabled ? '-' : '') + (rotation * rotationCnt).toString(10) + 'deg)'}
            ]);
        console.log(squareA);
        squareA.play();
    }
}
