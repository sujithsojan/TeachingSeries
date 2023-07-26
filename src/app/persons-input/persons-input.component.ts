import { Component } from '@angular/core';
import { PersonsService } from '../persons/persons.service';

@Component({
  selector: 'app-persons-input',
  templateUrl: './persons-input.component.html',
  styleUrls: ['./persons-input.component.css']
})
export class PersonsInputComponent {
  constructor(private prsService: PersonsService) {  }
  enteredPersonName = '';

  onCreateUser() {
    this.prsService.addPerson(this.enteredPersonName);
  this.enteredPersonName = '';

  }

}
