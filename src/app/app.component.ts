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
	if (this.includeNumbers) {
		passwordPool += numbersPool;
	} 
	if (this.includeSymbols) {
		passwordPool += symbolsPool;
	}


	for (let i = 0; i < this.passwordLength; i++ ) {
		let index = Math.floor(Math.random() * passwordPool.length);
		this.generatedPassword += passwordPool[index];
	}

	
  }
}
