import {Component, EmbeddedViewRef, HostBinding, HostListener, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {SwUpdate} from '@angular/service-worker';
import {MatSnackBar, MatSnackBarRef} from '@angular/material';
import {OverlayContainer} from '@angular/cdk/overlay';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'acb-root',
  template: `
    <ng-template #updateSnackBar>
      <div style="display: flex; flex: 1; flex-direction: row; align-content: space-between; align-self: center">
        <div style="align-self: center">An update is available</div>
        <div style="flex: 1"></div>
        <div>
          <button mat-button (click)="snackBarRef.dismiss()">Cancel</button>
          <button mat-button (click)="snackBarRef.dismissWithAction()">Install</button>
        </div>
      </div>
    </ng-template>
    <router-outlet></router-outlet>
  `,
  styles: [`
    :host {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
  `]
})
export class AppComponent implements OnInit {

  constructor(
    readonly swUpdate: SwUpdate,
    readonly snackBar: MatSnackBar,
    readonly overlay: OverlayContainer
  ) {
  }

  @HostBinding('class') cssClass = 'mat-typography';

  @ViewChild('updateSnackBar', {read: TemplateRef})
  updateSnackBar: TemplateRef<any>;

  snackBarRef: MatSnackBarRef<EmbeddedViewRef<any>>;

  @HostListener('window.beforeinstallprompt', ['$event'])
  beforeInstallPrompt($event: BeforeInstallPromptEvent) {
    $event.prompt();
  }

  ngOnInit(): void {
    this.overlay.getContainerElement().classList.add('mat-typography');
    this.swUpdate.available.pipe(switchMap(_ => this.askForUpdate())).subscribe(e => {
      window.location.reload();
    });
  }

  askForUpdate() {
    this.snackBarRef = this.snackBar.openFromTemplate(this.updateSnackBar, {});
    return this.snackBarRef.onAction();
  }
}
