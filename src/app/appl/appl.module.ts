import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { MenuComponent } from './component/menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'primeng/carousel';
import { ImgProductComponent } from '../common/img-product/img-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IntroduceComponent } from './component/introduce/introduce.component';
import { RouterModule } from '@angular/router';
import { NewsComponent } from './component/news/news.component';
import { ProdudctionSystemComponent } from './component/produdctionSystem/produdctionSystem.component';
import { CarouselComponent } from '../common/carousel/carousel.component';
import { MuaodauComponent } from './component/muaodau/muaodau.component';
import { LienheComponent } from './component/lienhe/lienhe.component';
import { TintucComponent } from './component/tintuc/tintuc.component';
import { MuctintucComponent } from './component/muctintuc/muctintuc.component';
import { ChitiettintucComponent } from './component/chitiettintuc/chitiettintuc.component';
import { Header3Component } from '../common/header3/header3.component';
import { HeaderMenuComponent } from '../common/headerMenu/headerMenu.component';
import { DanhmucsanphamComponent } from './component/danhmucsanpham/danhmucsanpham.component';
import { ProductDialogComponent } from '../common/productDialog/productDialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ChitietsanphamComponent } from './component/chitietsanpham/chitietsanpham.component';
import { GalleriaModule } from 'primeng/galleria';
import { FormsModule } from '@angular/forms';
import { ProgressBarModule } from 'primeng/progressbar';
import { TrangChuDuAnComponent } from './component/trang-chu-du-an/trang-chu-du-an.component';
import { ChuyenDiCuaNgongV2Component } from './component/chuyen-di-cua-ngong-v2/chuyen-di-cua-ngong-v2.component';
import { ChiTietTuyenDungComponent } from './component/chi-tiet-tuyen-dung/chi-tiet-tuyen-dung.component';
import { ChinhSachDaiLyCtvComponent } from './component/chinh-sach-dai-ly-ctv/chinh-sach-dai-ly-ctv.component';
import {DuAnKhacComponent} from './component/du-an-khac/du-an-khac.component';
import {HeThongDoiTacNewComponent} from './component/he-thong-doi-tac-new/he-thong-doi-tac-new.component';
import {TuyenDungNewComponent} from './component/tuyen-dung-new/tuyen-dung-new.component';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        NgbModule,
        FormsModule,
        CarouselModule,
        BrowserAnimationsModule,
        RouterModule,
        MatDialogModule,
        GalleriaModule,
        ProgressBarModule
    ],
    declarations: [
        MenuComponent,
        HeaderComponent,
        FooterComponent,
        ImgProductComponent,
        IntroduceComponent,
        NewsComponent,
        ProdudctionSystemComponent,
        CarouselComponent,
        MuaodauComponent,
        LienheComponent,
        TintucComponent,
        MuctintucComponent,
        ChitiettintucComponent,
        Header3Component,
        HeaderMenuComponent,
        DanhmucsanphamComponent,
        ProductDialogComponent,
        ChitietsanphamComponent,
        TrangChuDuAnComponent,
        ChuyenDiCuaNgongV2Component,
        ChiTietTuyenDungComponent,
        ChinhSachDaiLyCtvComponent,
        DuAnKhacComponent,
        HeThongDoiTacNewComponent,
        TuyenDungNewComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    exports: [
        MenuComponent,
        HeaderComponent,
        FooterComponent,
        ImgProductComponent,
        IntroduceComponent,
        NewsComponent,
        ProdudctionSystemComponent,
        CarouselComponent,
        MuaodauComponent,
        LienheComponent,
        TintucComponent,
        MuctintucComponent,
        ChitiettintucComponent,
        Header3Component,
        HeaderMenuComponent,
        DanhmucsanphamComponent,
        ChitietsanphamComponent,
        TrangChuDuAnComponent,
        ChuyenDiCuaNgongV2Component,
        ChiTietTuyenDungComponent,
        ChinhSachDaiLyCtvComponent
    ]
})
export class ApplModule { }
