import { Component, OnInit, Input, Renderer2, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-header3',
    templateUrl: './header3.component.html',
    styleUrls: ['./header3.component.css']
})
export class Header3Component implements OnInit, AfterViewInit {

    isSlide: boolean = false;
    @Input() banner: boolean = false;
    searchBox: boolean = false;
    @ViewChild('menu', { static: false }) menu!: ElementRef;
    constructor(
        private render: Renderer2
    ) { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.render.listen(document, 'scroll', (e) => {
            if (window.innerWidth <= 991) {
                return;
            }
            const scrollTop = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
            if (scrollTop >= 140) {
                this.render.addClass(this.menu.nativeElement, 'scrolling');
                this.isSlide = true;
            } else {
                this.render.removeClass(this.menu.nativeElement, 'scrolling');
                this.isSlide = false;
            }
        });
    }

    onClickSearch(event: any) {
        alert('a');
    }

}
