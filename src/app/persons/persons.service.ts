import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class PersonsService {

  persons: string[] = ['Rose', 'Davis', 'Sreekumar'];

  addPerson (name: string) {
    this.persons.push('name');
  }
}
