import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CarouselComponent implements OnInit {

    @Input() size: number = 0;
    @Input() prod: string = 'imange';
    @Input() slideItems: string[] = [];
    @Input() className: string = '';
    @Input() images: string[] = [];
    @Input() styleName: string = '';
    @Input() datas: any[] = [];
    @Input() product: boolean = false;
    @Input() i_con: boolean = false;
    @Input() feedback: boolean = false;
    @Input() news: boolean = false;
    @Input() newspapers: boolean = false;
    @Input() prize: boolean = false;
    @Input() form: boolean = false;

    @Input() numVisible: number = 4;
    @Input() responsiveOptions: any = [
        {
            breakpoint: '1024px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '800px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    constructor() {
        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '800px',
                numVisible: 1,
                numScroll: 1
            },
            {
                breakpoint: '560px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }

    ngOnInit() {
    }
}
