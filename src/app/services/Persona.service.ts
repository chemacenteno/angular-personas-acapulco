import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Persona } from '../models/Persona.model';

const apiURL = 'https://randomapi.com/api/vomqkhmn?key=N4KD-XS19-5WA9-VT4K';

@Injectable({ providedIn: 'root' })
export class PersonaService {

    public personaAdd$: EventEmitter<Persona> = new EventEmitter<Persona>();

    constructor(private http: HttpClient) { }

    getPersonas() {
        return this.http.get(apiURL).pipe(map((resultado: any) => {
            return resultado.results[0];
        }));
    }
}