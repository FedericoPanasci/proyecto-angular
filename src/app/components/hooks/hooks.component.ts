import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Persona } from 'src/app/models/persona.model';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.scss']
})
export class HooksComponent implements OnInit, OnDestroy, AfterViewInit {

  persons : Persona[] = [];

  private subscriptions: Subscription | undefined;
  constructor(
    private personService: PersonService
    //private personService: personService
    ) {
      console.log('hooks - consructor');
    }

  ngOnInit(): void {
    this.subscriptions = this.personService.getList().subscribe(persons => persons = this.persons = persons);

    console.log('hooks - on init');
  }

  ngAfterViewInit(): void {
    // const lastElement: any = document.querySelector('.last-element');
    // lastElement?.scrollIntoView();
    // console.log('hooks - after');
  }

  selectedPerson(person: Persona){
    this.personService.getById(String(person.id)).subscribe(data => console.log(data));
  }
  ngOnDestroy(): void{
    this.subscriptions?.unsubscribe();
    console.log('hooks - ondestroy');
  }
}
