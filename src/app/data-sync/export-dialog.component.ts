import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ExportService } from '../export.service';

@Component({
    selector: 'acb-export-dialog',
    template: `
    <div mat-dialog-content *ngIf="data.qrValue">
        <ngx-qrcode
            [qrc-value]="data.qrValue">
        </ngx-qrcode>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="close()" style="float: right">Close</button>
    </div>
    `,
    styles: [`
    `]
})
export class ExportDialogComponent {

    constructor(
        public dialogRef: MatDialogRef<ExportDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: {qrValue: string},
        readonly exportService: ExportService
    ) {
        console.log(data.qrValue);
    }

    close(): void {
        this.dialogRef.close();
    }
}
