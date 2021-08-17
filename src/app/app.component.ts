import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  password: string = '';
  length = 0;
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;

  onInputLength(event: Event) {
    let parsedValue = parseInt((event.target as HTMLInputElement).value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onChangeUseLetters(event: Event) {
    this.includeLetters = (event.target as HTMLInputElement).checked;
  }

  onChangeUseNumbers(event: Event) {
    this.includeNumbers = (event.target as HTMLInputElement).checked;
  }

  onChangeUseSymbols(event: Event) {
    this.includeSymbols = (event.target as HTMLInputElement).checked;
  }

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvxyz';
    const symbols = '()£@%^&!_';

    let validChars = '';
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }
}
