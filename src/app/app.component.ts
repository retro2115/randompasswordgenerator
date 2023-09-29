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

  getPasswordLength(value: string) {
	let inputValue = parseInt(value);
	if (typeof(inputValue) === 'number') {
		this.passwordLength = inputValue;
	}
	console.log(inputValue)
  }
  onChangeIncludeLetters() {

  };
  onChangeIncludeNumbers() {

  };
  onChangeIncludeSymbols() {

  };

}
