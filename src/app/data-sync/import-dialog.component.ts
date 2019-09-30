import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ExportService } from '../export.service';

@Component({
    selector: 'acb-import-dialog',
    template: `
    <div mat-dialog-content>
        <zxing-scanner
            [torch]="torchEnabled"
            [(device)]="currentDevice"
            (scanSuccess)="onCodeResult($event)"
            (permissionResponse)="onHasPermission($event)"
            (camerasFound)="onCamerasFound($event)"
            (torchCompatible)="onTorchCompatible($event)">
        </zxing-scanner>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="close()" style="float: right">Close</button>
    </div>
    `,
    styles: [`
    `]
})
export class ImportDialogComponent {

    hasPermission: boolean;
    torchAvailable$: any;
    torchEnabled: boolean;
    qrResultString: string;
    availableDevices: MediaDeviceInfo[];
    hasDevices: boolean;
    currentDevice: MediaDeviceInfo | null;

    constructor(
        public dialogRef: MatDialogRef<ImportDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: null,
        readonly exportService: ExportService
    ) {
    }

    clearResult(): void {
        this.qrResultString = null;
    }

    onCamerasFound(devices: MediaDeviceInfo[]): void {
        this.availableDevices = devices;
        this.hasDevices = Boolean(devices && devices.length);
    }

    onCodeResult(resultString: string) {
        this.dialogRef.close(resultString);
    }


    onDeviceSelectChange(selected: string) {
        const device = this.availableDevices.find(x => x.deviceId === selected);
        this.currentDevice = device || null;
    }

    onHasPermission(has: boolean) {
        this.hasPermission = has;
    }

    onTorchCompatible(isCompatible: boolean): void {
        this.torchAvailable$.next(isCompatible || false);
    }

    close(): void {
        this.dialogRef.close();
    }
}
