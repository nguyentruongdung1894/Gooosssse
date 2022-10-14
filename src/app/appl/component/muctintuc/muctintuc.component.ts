import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-muctintuc',
    templateUrl: './muctintuc.component.html',
    styleUrls: ['./muctintuc.component.css']
})
export class MuctintucComponent implements OnInit {

    isShow: boolean = false;
    tintucList = [
        'https://file.hstatic.net/200000170631/article/logo_ngong__600_x_375__29344ad4b48045eea1b44ff92fc8af04_large.png',
        'https://file.hstatic.net/200000170631/article/logo_ngong__600_x_375__29344ad4b48045eea1b44ff92fc8af04_large.png',
        'https://file.hstatic.net/200000170631/article/logo_ngong__600_x_375__29344ad4b48045eea1b44ff92fc8af04_large.png',
        'https://file.hstatic.net/200000170631/article/logo_ngong__600_x_375__29344ad4b48045eea1b44ff92fc8af04_large.png',
        'https://file.hstatic.net/200000170631/article/logo_ngong__600_x_375__29344ad4b48045eea1b44ff92fc8af04_large.png',
        'https://file.hstatic.net/200000170631/article/logo_ngong__600_x_375__29344ad4b48045eea1b44ff92fc8af04_large.png',
        'https://file.hstatic.net/200000170631/article/logo_ngong__600_x_375__29344ad4b48045eea1b44ff92fc8af04_large.png',
        'https://file.hstatic.net/200000170631/article/logo_ngong__600_x_375__29344ad4b48045eea1b44ff92fc8af04_large.png',
        'https://file.hstatic.net/200000170631/article/logo_ngong__600_x_375__29344ad4b48045eea1b44ff92fc8af04_large.png',
        'https://file.hstatic.net/200000170631/article/logo_ngong__600_x_375__29344ad4b48045eea1b44ff92fc8af04_large.png',
        'https://file.hstatic.net/200000170631/article/logo_ngong__600_x_375__29344ad4b48045eea1b44ff92fc8af04_large.png',
        'https://file.hstatic.net/200000170631/article/logo_ngong__600_x_375__29344ad4b48045eea1b44ff92fc8af04_large.png'
    ]

    baochiList = [
        'https://file.hstatic.net/200000170631/article/ngong-tren-bao-nong-nghiep-viet-nam_784163604a1a4abcab95470302e0c885.jpg',
        'https://file.hstatic.net/200000170631/article/ngong-tren-bao-nong-nghiep-viet-nam_784163604a1a4abcab95470302e0c885.jpg',
        'https://file.hstatic.net/200000170631/article/ngong-tren-bao-nong-nghiep-viet-nam_784163604a1a4abcab95470302e0c885.jpg',
        'https://file.hstatic.net/200000170631/article/ngong-tren-bao-nong-nghiep-viet-nam_784163604a1a4abcab95470302e0c885.jpg',
    ]

    constructor() { }

    ngOnInit() {
    }

}
