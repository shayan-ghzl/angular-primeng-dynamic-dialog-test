import 'zone.js/dist/zone';
import { Component, importProvidersFrom, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { provideAnimations } from '@angular/platform-browser/animations';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>this is a dialog</h2>
  `,
})
export class SampleDialog {}

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>issue target:</h2>
    <p>dynamic dialog module</p>
    <h2>issue description:</h2>
    <p>you can open a specific type of dynamic dialog many times on top of each other</p>
    <hr>
    <h2>example:</h2>
    <p>i added a shortcut to open a dynamic dialog</p>
    <strong>press the <span>insert</span> button on the keyboard multiple time</strong>
  `,
  styles: [
    `
      span { 
        border-bottom: 1px solid #000;
        color: #ff0000;
        font-size: 18px;
      }
    `,
  ],
})
export class App {
  name = 'shayan ghazali';

  constructor(private dialogService: DialogService) {}

  @HostListener('document:keyup', ['$event'])
  openDynamicDialog(): void {
    const ref = this.dialogService.open(SampleDialog, {
      header: 'i am a dynamic dialog',
      width: '85%',
    });
  }
}

bootstrapApplication(App, {
  providers: [
    provideAnimations(),
    importProvidersFrom(DynamicDialogModule),
    DialogService,
  ],
});
