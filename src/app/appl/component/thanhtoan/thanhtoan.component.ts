import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-thanhtoan',
    templateUrl: './thanhtoan.component.html',
    styleUrls: ['./thanhtoan.component.scss']
})
export class ThanhtoanComponent implements OnInit {

    voucher = '';
    checked = false;
    isCard = false;
    ismomo = false;
    iszalo = false;
    selectedCity1 = { name: '', code: '', districts: null };
    selectedCity2 = { name: '', code: '', wards: null };
    selectedCity3 = { name: '', code: '' };
    cities = [
        { name: 'Chọn tỉnh thành', code: '0', districts: null },
    ];

    district = [
        { name: 'Chọn Quận/Huyện', code: '0', wards: null },
    ];
    wards = [
        { name: 'Chọn Phường', code: '' },
    ]
    product: any;
    total = '';
    ship = '30,000';
    constructor(private router: Router, private http: HttpClient) { }

    ngOnInit() {
        const ecode = this.router.url.split('/thanh-toan/')[1];
        this.product = JSON.parse(sessionStorage.getItem(ecode) as any);
        if (this.product && this.product.length) {
            let totalNumber = 0;
            this.product.forEach((item: any) => {
                totalNumber += +(item.price) * item.quantity;
            });
            this.total = String(totalNumber);
        }
        this.http.get('https://provinces.open-api.vn/api/?depth=3').subscribe((datas: any) => {
            console.log(datas);
            datas.forEach((data: any) => {
                this.cities.push({ name: data.name, code: data.code, districts: data.districts });
            });
        })
    }

    citiesChange(selectedCity1: any) {
        this.district = [
            { name: 'Chọn Quận/Huyện', code: '0', wards: null },
        ];
        this.wards = [
            { name: 'Chọn Phường', code: '' },
        ]
        selectedCity1.districts.forEach((data: any) => {
            this.district.push({ name: data.name, code: data.code, wards: data.wards });
        });
    }

    districtChange(selectedCity2: any) {
        this.wards = [
            { name: 'Chọn Phường', code: '' },
        ]
        selectedCity2.wards.forEach((data: any) => {
            this.wards.push({ name: data.name, code: data.code });
        });
    }


    cardCheck(event: any) {
        if (event.target.checked) {
            this.isCard = true;
        }
        this.ismomo = false;
        this.iszalo = false;
    }

    momoCheck(event: any) {
        if (event.target.checked) {
            this.ismomo = true;
        }
        this.iszalo = false;
        this.isCard = false;
    }

    zaloCheck(event: any) {
        if (event.target.checked) {
            this.iszalo = true;
        }
        this.ismomo = false;
        this.isCard = false;
    }

    formatCash(str: string) {
        str = String(str);
        return str.split('').reverse().reduce((prev, next, index) => {
            return ((index % 3) ? next : (next + ',')) + prev
        })
    }

}
