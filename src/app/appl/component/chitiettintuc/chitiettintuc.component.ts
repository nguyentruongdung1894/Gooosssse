import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-chitiettintuc',
    templateUrl: './chitiettintuc.component.html',
    styleUrls: ['./chitiettintuc.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class ChitiettintucComponent implements OnInit {

    listTinTuc = [
        'Mật trà Kombucha thảo mộc 500ml',
        'Mật trà Kombucha thảo mộc 500ml',
        'Mật trà Kombucha thảo mộc 500ml',
        'Mật trà Kombucha thảo mộc 500ml',
        'Mật trà Kombucha thảo mộc 500ml',
        'Mật trà Kombucha thảo mộc 500ml',
        'Mật trà Kombucha thảo mộc 500ml',
        'Mật trà Kombucha thảo mộc 500ml',
        'Mật trà Kombucha thảo mộc 500ml',
        'Mật trà Kombucha thảo mộc 500ml',
    ]

    constructor() { }

    ngOnInit() {
    }

}
