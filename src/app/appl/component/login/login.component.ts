import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { HttpService } from 'src/app/common/service/http-service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig, public httpService: HttpService) { }
    data: any;
    isLogin = false;
    isRecover = false;
    ngOnInit() {
        this.data = this.config.data;
        this.isLogin = this.data.login;
    }

    onRigister() {
        this.isLogin = false;
    }

    onLogin() {
        // this.httpService.reqeustApiget('test', {
        //     "username": "user_ngong@gmail.com",
        //     "password": "1234"
        // }).subscribe(response => {
        //     console.log(response);
        // });

        this.httpService.reqeustApiPost('user', {
            "username": "user_ngong@gmail.com",
            "password": "1234"
        }).subscribe(response => {
            console.log(response);
        });
        this.isLogin = true;
    }

}
