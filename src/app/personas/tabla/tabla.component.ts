import { Component, Input, OnInit } from '@angular/core';
import { camposPersona, Persona } from 'src/app/models/Persona.model';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {

  public campos: any[] = camposPersona;

  @Input('personas')
  personas!: Persona[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
