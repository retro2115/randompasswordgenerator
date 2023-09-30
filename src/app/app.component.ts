import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'randompasswordgenerator';

  passwordLength = 0;
  generatedPassword = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  getPasswordLength(value: string) {
	let inputValue = parseInt(value);
	if (typeof(inputValue) === 'number') {
		this.passwordLength = inputValue;
	}
	console.log(inputValue)
  }
  onChangeIncludeLetters() {
	this.includeLetters = !this.includeLetters;
  };
  onChangeIncludeNumbers() {
	this.includeNumbers = !this.includeNumbers;
  };
  onChangeIncludeSymbols() {
	this.includeSymbols = !this.includeSymbols;
  };

  generatePassword() {
	let lettersPool = 'abcdefghijklmnopqrstuVwxyz';
	let numbersPool = '1234567890';
	let symbolsPool = '1!"#$%&/()=?*';
	let passwordPool = '';
	if (this.includeLetters) {
		passwordPool += lettersPool;
	}
	if (numbersPool) {
		passwordPool += numbersPool;
	} 


  }
}
