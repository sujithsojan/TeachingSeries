import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-persons-input',
  templateUrl: './persons-input.component.html',
  styleUrls: ['./persons-input.component.css']
})
export class PersonsInputComponent {
  constructor() { }
  @Output() personCreate = new EventEmitter<string>();
  enteredPersonName = '';

  onCreateUser() {
  this.personCreate.emit(this.enteredPersonName);
  this.enteredPersonName = '';
  }

}
