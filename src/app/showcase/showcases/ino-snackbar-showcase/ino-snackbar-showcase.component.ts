import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-ino-snackbar-showcase',
  templateUrl: './ino-snackbar-showcase.component.html',
  styleUrls: ['./ino-snackbar-showcase.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InoSnackbarShowcaseComponent {
  snackbarStates = [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ];
  sampleText = 'User successfully updated!';

  displaySnackbar(snackbarId: number) {
    if (snackbarId in this.snackbarStates) {
      this.snackbarStates[snackbarId] = true;
    }
  }

  hideSnackbar(snackbarId: number) {
    if (snackbarId in this.snackbarStates) {
      this.snackbarStates[snackbarId] = false;
    }
  }

}
