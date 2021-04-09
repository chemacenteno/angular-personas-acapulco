import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Persona } from './models/Persona.model';
import { PersonaService } from './services/Persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  public personas: Persona[] = [];
  private subscriptions: Subscription[] = [];

  constructor(private personaService: PersonaService) {
    this.personaService.getPersonas().subscribe((respuesta: Persona[]) => {
      this.personas = respuesta;
      localStorage.setItem('personas', JSON.stringify(this.personas));
    });

    this.personaService.personaAdd$.subscribe((persona: Persona) => {
      this.addPersona(persona);
    })
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe() );
  }

  addPersona(persona: Persona) {
    this.personas.unshift(persona);
    localStorage.setItem('personas', JSON.stringify(this.personas));
  }
  
}
