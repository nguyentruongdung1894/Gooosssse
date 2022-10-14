import { Component, OnInit, ViewEncapsulation, ElementRef, Renderer2, ViewChild, Input, HostListener } from '@angular/core';
import * as imageData from '../../../../assets/images.json';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

    @ViewChild('menu', { static: true }) menu!: ElementRef;
    isSlide: boolean = false;
    isMobile: boolean = false;
    image = imageData;
    constructor(
        private ele: ElementRef,
        private render: Renderer2
    ) { }

    images = [
        "../../../../assets/image/main/ms_banner_img1.jpg",
        "../../../../assets/image/main/ms_banner_img2.jpg",
        "../../../../assets/image/main/ms_banner_img4.jpg"
    ]

    @Input() showmenu = false;
    @Input() showintroduce = false;

    ngOnInit() {
        if (window.innerWidth <= 991) {
            this.isMobile = true;
        } else {
            this.isMobile = false;
        }
        this.render.listen(document, 'scroll', (e) => {
            if (window.innerWidth <= 991) {
                return;
            }
            const scrollTop = (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
            if (scrollTop >= 160) {
                this.render.addClass(this.menu.nativeElement, 'scrolling');
                this.isSlide = true;
            } else {
                this.render.removeClass(this.menu.nativeElement, 'scrolling');
                this.isSlide = false;
            }
        });
    }

    @HostListener('window: resize', ['$event'])
    resizeable(event: any) {
        if (window.innerWidth <= 991) {
            this.isMobile = true;
        } else {
            this.isMobile = false;
        }
    }


}
