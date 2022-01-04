import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { Persona } from 'src/app/models/persona.model';
import { PersonaItemComponent } from '../persona-item/persona-item.component';

@Component({
  selector: 'app-persona-list',
  templateUrl: './persona-list.component.html',
  styleUrls: ['./persona-list.component.scss']
})
export class PersonaListComponent implements OnInit, AfterViewInit {

  @Input() personas: Persona[] = [];
  @Output() selected = new EventEmitter<Persona>();


  selectedPersona: Persona = { nombre: '', apellido: '' };

  constructor() { }

  @ViewChildren(PersonaItemComponent) personaItems: QueryList<PersonaItemComponent> | any;

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.personaItems.forEach((persona: any) => console.log(persona))
  }

  clickPersona(persona: Persona) {
    this.selectedPersona = persona;
    this.selected.emit(persona);
  }

  isSelected(persona: Persona): boolean {
    return persona.nombre === this.selectedPersona.nombre &&
      persona.apellido === this.selectedPersona.apellido
  }
}
