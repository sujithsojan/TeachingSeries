import { Component, OnDestroy, OnInit } from '@angular/core';
import { PersonsService } from './persons.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit,OnDestroy {

  personsList: string[]= [];
  private personListSubs: Subscription = new Subscription();
  constructor(private prsService: PersonsService) {
   }

   ngOnInit() {
     this.personListSubs= this.prsService.personChanged.subscribe(persons => {
      this.personsList = persons;
     });
     this.prsService.fetchPersons();
   }

   ngOnDestroy() {
    this.personListSubs.unsubscribe();
   }

   onPersonRemove(personName: string) {
    this.prsService.removePerson(personName);
   }




}
