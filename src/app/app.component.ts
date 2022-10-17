import { Component, HostListener, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    isHiden = true;
    ngOnInit(): void {

    }

    @HostListener('window: scroll', ['$event'])
    onScroll(event: any) {
        this.isHiden = window.scrollY ? true : false;
        // console.log(window.scrollY);
    }

    backTopClick() {
        window.scrollTo(0, 0);
    }

}
