import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-headerMenu',
    templateUrl: './headerMenu.component.html',
    styleUrls: ['./headerMenu.component.css']
})
export class HeaderMenuComponent implements OnInit {

    @Input() slide = false;
    searchBox: boolean = false;
    constructor() { }

    ngOnInit() {
    }

}
