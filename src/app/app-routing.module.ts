import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChitietsanphamComponent } from './appl/component/chitietsanpham/chitietsanpham.component';
import { ChitiettintucComponent } from './appl/component/chitiettintuc/chitiettintuc.component';
import { DanhmucsanphamComponent } from './appl/component/danhmucsanpham/danhmucsanpham.component';
import { IntroduceComponent } from './appl/component/introduce/introduce.component';
import { LienheComponent } from './appl/component/lienhe/lienhe.component';
import { MenuComponent } from './appl/component/menu/menu.component';
import { MuaodauComponent } from './appl/component/muaodau/muaodau.component';
import { MuctintucComponent } from './appl/component/muctintuc/muctintuc.component';
import { NewsComponent } from './appl/component/news/news.component';
import { ProdudctionSystemComponent } from './appl/component/produdctionSystem/produdctionSystem.component';
import { TintucComponent } from './appl/component/tintuc/tintuc.component';
import {TrangChuDuAnComponent} from './appl/component/trang-chu-du-an/trang-chu-du-an.component';
import {ChuyenDiCuaNgongV2Component} from './appl/component/chuyen-di-cua-ngong-v2/chuyen-di-cua-ngong-v2.component';
import {ChiTietTuyenDungComponent} from './appl/component/chi-tiet-tuyen-dung/chi-tiet-tuyen-dung.component';
import {ChinhSachDaiLyCtvComponent} from './appl/component/chinh-sach-dai-ly-ctv/chinh-sach-dai-ly-ctv.component';
import {DuAnKhacComponent} from './appl/component/du-an-khac/du-an-khac.component';
import {HeThongDoiTacNewComponent} from './appl/component/he-thong-doi-tac-new/he-thong-doi-tac-new.component';
import {TuyenDungNewComponent} from './appl/component/tuyen-dung-new/tuyen-dung-new.component';

const routes: Routes = [
    { path: '', component: MenuComponent },
    { path: 'introduce', component: IntroduceComponent, title: 'Về Ngỗng' },
    { path: 'news', component: NewsComponent, title: 'Báo chí nói gì về ngỗng' },
    { path: 'production-system', component: ProdudctionSystemComponent, title: 'Hệ thống sản xuất và quản lý' },
    { path: 'mua-o-dau', component: MuaodauComponent, title: 'Mua ở đâu' },
    { path: 'lien-he', component: LienheComponent, title: 'Liên hệ' },
    { path: 'chuyen-cua-ngong', component: TintucComponent, title: 'Chuyện của Ngỗng' },
    { path: 'chuyen-ngong', component: MuctintucComponent, title: 'Chuyện Ngỗng' },
    { path: 'chi-tiet-tin-tuc', component: ChitiettintucComponent, title: 'Chi tiết tin tức' },
    { path: 'danh-muc-san-pham', component: DanhmucsanphamComponent, title: 'Danh mục sản phẩm' },
    { path: 'chi-tiet-san-pham', component: ChitietsanphamComponent, title: 'Chi tiết sản phẩm' },
    { path: 'trang-chu-du-an', component: TrangChuDuAnComponent, title: 'Trang chủ dự án' },
    { path: 'chuyen-di-cua-ngong-v2', component: ChuyenDiCuaNgongV2Component, title: 'Chuyến đi của ngỗng' },
    { path: 'chi-tiet-tuyen-dung', component: ChiTietTuyenDungComponent, title: 'Chi tiết tuyển dụng' },
    { path: 'chinh-sach-dai-ly-ctv', component: ChinhSachDaiLyCtvComponent, title: 'Chính sách đại lý' },
    { path: 'du-an-khac', component: DuAnKhacComponent, title: 'Dự án khác' },
    { path: 'he-thong-doi-tac-new', component: HeThongDoiTacNewComponent, title: 'Hệ thống đối tác new' },
    { path: 'tuyen-dung-new', component: TuyenDungNewComponent, title: 'Tuyển dụng new' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
