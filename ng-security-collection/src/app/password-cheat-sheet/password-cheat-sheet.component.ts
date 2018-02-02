import {RandomStringService} from '../services/random-string.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'password-cheat-sheet',
  templateUrl: './password-cheat-sheet.component.html',
  styleUrls: ['./password-cheat-sheet.component.css']
})
export class PasswordCheatSheetComponent implements OnInit {

  readonly columnLabels: string[] = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQR', 'STU', 'VWX', 'YZ.', '0-9'];
  readonly rowLabels: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  randomValues: string[][];

  constructor(private randomStringService: RandomStringService) {}

  ngOnInit() {

    this.fillRandomSigns();
  }

  public fillRandomSigns() {
    this.randomValues = [];

    for (let rowIndex = 0; rowIndex < this.rowLabels.length; rowIndex++) {
      this.randomValues[rowIndex] = [];

      for (let columnIndex = 0; columnIndex < this.columnLabels.length; columnIndex++) {
        this.randomValues[rowIndex][columnIndex] = this.randomStringService.generateRandomString(
          'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-+!.', 3);
      }
    }

    setTimeout(() => this.fillRandomSigns(), 2000);
  }

}
