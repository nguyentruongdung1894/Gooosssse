import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProductDialogComponent } from '../productDialog/productDialog.component';
@Component({
    selector: 'app-img-product',
    templateUrl: './img-product.component.html',
    styleUrls: ['./img-product.component.scss']
})
export class ImgProductComponent implements OnInit {

    animal: string = '';
    @Input() sale: string = '';
    @Input() imgSrc: string = '';
    constructor(private dialog: MatDialog) { }

    ngOnInit() {
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(ProductDialogComponent, {
            width: '250px',
            data: { name: 'aaa', animal: 'nbbb' },
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }

}
