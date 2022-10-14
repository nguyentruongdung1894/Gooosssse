import { Component, OnInit, ViewEncapsulation, HostListener } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {

    isMobile: boolean = false;
    imageGroup: any[] = [];
    sizeProduct: number = 0;
    datasSale: any[] = [];
    numVisible: number = 0;
    responsiveOptions = [
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

    imagesHome = [
        {
            img: "../../../../assets/image/main/ms_banner_img1.jpg",
            url: 'https://www.chuyendicuangong.vn/'
        },
        {
            img: "../../../../assets/image/main/ms_banner_img2.jpg",
            url: 'danh-muc-san-pham'
        },
        {
            img: "../../../../assets/image/main/ms_banner_img4.jpg",
            url: 'danh-muc-san-pham'
        }
    ]

    images = [
        "../../../../assets/image/products/mat-tra-kombucha-cot-chuoi-500ml_0d0457c2e57048c0be7305d0953ae0f2_large.webp",
        "../../../../assets/image/products/mat-tra-kombucha-cot-chuoi-500ml_0d0457c2e57048c0be7305d0953ae0f2_large.webp",
        "../../../../assets/image/products/mat-tra-kombucha-cot-chuoi-500ml_0d0457c2e57048c0be7305d0953ae0f2_large.webp",
        "../../../../assets/image/products/mat-tra-kombucha-cot-chuoi-500ml_0d0457c2e57048c0be7305d0953ae0f2_large.webp",
        "../../../../assets/image/products/mat-tra-kombucha-cot-chuoi-500ml_0d0457c2e57048c0be7305d0953ae0f2_large.webp",
        "../../../../assets/image/products/mat-tra-kombucha-cot-chuoi-500ml_0d0457c2e57048c0be7305d0953ae0f2_large.webp",
    ];

    imagesMember = [
        {
            title: 'Bột sữa hạt Vui Khỏe Đẹp làm ra từ cá loại đậu hạt ưu tiên tuyển chọn từ những vùng nguyên',
            image: "../../../../assets/image/main/member1.png"
        },
        {
            title: 'Bột sữa hạt Vui Khỏe Đẹp làm ra từ cá loại đậu hạt ưu tiên tuyển chọn từ những vùng nguyên',
            image: "../../../../assets/image/main/member1.png"
        },
        {
            title: 'Bột sữa hạt Vui Khỏe Đẹp làm ra từ cá loại đậu hạt ưu tiên tuyển chọn từ những vùng nguyên',
            image: "../../../../assets/image/main/member1.png"
        },
        {
            title: 'Bột sữa hạt Vui Khỏe Đẹp làm ra từ cá loại đậu hạt ưu tiên tuyển chọn từ những vùng nguyên',
            image: "../../../../assets/image/main/member1.png"
        }
    ]

    imagetrademark = [
        {
            image: "../../../../assets/image/icons/hteamus_3.webp"
        },
        {
            image: "../../../../assets/image/icons/hteamus_2.webp"
        },
        {
            image: "../../../../assets/image/icons/hteamus_5.png"
        },
        {
            image: "../../../../assets/image/icons/hteamus_7.webp"
        },
        {
            image: "../../../../assets/image/icons/hteamus_9.webp"
        },
        {
            image: "../../../../assets/image/icons/hteamus_3.webp"
        },
        {
            image: "../../../../assets/image/icons/hteamus_2.webp"
        },
        {
            image: "../../../../assets/image/icons/hteamus_5.png"
        },
        {
            image: "../../../../assets/image/icons/hteamus_7.webp"
        }
    ]

    imagesProduct = [
        "../../../../assets/image/products/mat-tra-kombucha-cot-chuoi-500ml_0d0457c2e57048c0be7305d0953ae0f2_large.webp",
        "../../../../assets/image/products/mat-tra-kombucha-cot-chuoi-500ml_0d0457c2e57048c0be7305d0953ae0f2_large.webp",
        "../../../../assets/image/products/mat-tra-kombucha-cot-chuoi-500ml_0d0457c2e57048c0be7305d0953ae0f2_large.webp",
        "../../../../assets/image/products/mat-tra-kombucha-cot-chuoi-500ml_0d0457c2e57048c0be7305d0953ae0f2_large.webp",
        "../../../../assets/image/products/mat-tra-kombucha-cot-chuoi-500ml_0d0457c2e57048c0be7305d0953ae0f2_large.webp",
        "../../../../assets/image/products/mat-tra-kombucha-cot-chuoi-500ml_0d0457c2e57048c0be7305d0953ae0f2_large.webp",
        "../../../../assets/image/products/mat-tra-kombucha-cot-chuoi-500ml_0d0457c2e57048c0be7305d0953ae0f2_large.webp",
        "../../../../assets/image/products/mat-tra-kombucha-cot-chuoi-500ml_0d0457c2e57048c0be7305d0953ae0f2_large.webp",
        "../../../../assets/image/products/mat-tra-kombucha-cot-chuoi-500ml_0d0457c2e57048c0be7305d0953ae0f2_large.webp",
        "../../../../assets/image/products/mat-tra-kombucha-cot-chuoi-500ml_0d0457c2e57048c0be7305d0953ae0f2_large.webp"
    ]

    image: string = "../../../../assets/image/products/mat-tra-kombucha-cot-chuoi-500ml_0d0457c2e57048c0be7305d0953ae0f2_large.webp"

    slides: any = [];
    constructor() {
        this.numVisible = 6;
    }

    ngOnInit() {
        if (window.innerWidth <= 991) {
            this.isMobile = true;
        } else {
            this.isMobile = false;
        }
        this.datasSale = [
            {
                image: "../../../../assets/image/products/mat-tra-kombucha-cot-chuoi-500ml_0d0457c2e57048c0be7305d0953ae0f2_large.webp",
                sale: '21',
                title: 'Mật Trà Kombucha Thảo Mộc',
                money: '155.000',
            },
            {
                image: "../../../../assets/image/products/mat-tra-kombucha-cot-chuoi-500ml_0d0457c2e57048c0be7305d0953ae0f2_large.webp",
                sale: '21',
                title: 'Mật Trà Kombucha Thảo Mộc',
                money: '200.000',
            },
            {
                image: "../../../../assets/image/products/mat-tra-kombucha-cot-chuoi-500ml_0d0457c2e57048c0be7305d0953ae0f2_large.webp",
                sale: '21',
                title: 'Mật Trà Kombucha Thảo Mộc',
                money: '250.000',
            },
            {
                image: "../../../../assets/image/products/mat-tra-kombucha-cot-chuoi-500ml_0d0457c2e57048c0be7305d0953ae0f2_large.webp",
                sale: '21',
                title: 'Mật Trà Kombucha Thảo Mộc',
                money: '155.000',
            },
            {
                image: "../../../../assets/image/products/mat-tra-kombucha-cot-chuoi-500ml_0d0457c2e57048c0be7305d0953ae0f2_large.webp",
                sale: '21',
                title: 'Mật Trà Kombucha Thảo Mộc',
                money: '155.000',
            },
            {
                image: "../../../../assets/image/products/mat-tra-kombucha-cot-chuoi-500ml_0d0457c2e57048c0be7305d0953ae0f2_large.webp",
                sale: '21',
                title: 'Mật Trà Kombucha Thảo Mộc',
                money: '155.000',
            },
            {
                image: "../../../../assets/image/products/mat-tra-kombucha-cot-chuoi-500ml_0d0457c2e57048c0be7305d0953ae0f2_large.webp",
                sale: '21',
                title: 'Mật Trà Kombucha Thảo Mộc',
                money: '155.000',
            },
            {
                image: "../../../../assets/image/products/mat-tra-kombucha-cot-chuoi-500ml_0d0457c2e57048c0be7305d0953ae0f2_large.webp",
                sale: '21',
                title: 'Mật Trà Kombucha Thảo Mộc',
                money: '155.000',
            },
            {
                image: "../../../../assets/image/products/mat-tra-kombucha-cot-chuoi-500ml_0d0457c2e57048c0be7305d0953ae0f2_large.webp",
                sale: '21',
                title: 'Mật Trà Kombucha Thảo Mộc',
                money: '155.000',
            },
            {
                image: "../../../../assets/image/products/mat-tra-kombucha-cot-chuoi-500ml_0d0457c2e57048c0be7305d0953ae0f2_large.webp",
                sale: '21',
                title: 'Mật Trà Kombucha Thảo Mộc',
                money: '155.000',
            },
            {
                image: "../../../../assets/image/products/mat-tra-kombucha-cot-chuoi-500ml_0d0457c2e57048c0be7305d0953ae0f2_large.webp",
                sale: '21',
                title: 'Mật Trà Kombucha Thảo Mộc',
                money: '155.000',
            },
            {
                image: "../../../../assets/image/products/mat-tra-kombucha-cot-chuoi-500ml_0d0457c2e57048c0be7305d0953ae0f2_large.webp",
                sale: '21',
                title: 'Mật Trà Kombucha Thảo Mộc',
                money: '155.000',
            },
            {
                image: "../../../../assets/image/products/mat-tra-kombucha-cot-chuoi-500ml_0d0457c2e57048c0be7305d0953ae0f2_large.webp",
                sale: '21',
                title: 'Mật Trà Kombucha Thảo Mộc',
                money: '155.000',
            },
            {
                image: "../../../../assets/image/products/mat-tra-kombucha-cot-chuoi-500ml_0d0457c2e57048c0be7305d0953ae0f2_large.webp",
                sale: '21',
                title: 'Mật Trà Kombucha Thảo Mộc',
                money: '155.000',
            }
        ]
    }

    @HostListener('window: resize', ['$event'])
    resizeable(event: any) {
        if (window.innerWidth <= 991) {
            this.isMobile = true;
            this.sizeProduct = 2;
        } else {
            this.isMobile = false;
            this.sizeProduct = 5;
        }
    }

    onClick(url: any) {
        if (url.includes('http')) {
            window.location.href = url;
        } else {
            window.location.href = `${window.location.href}${url}`;
        }
    }
}
