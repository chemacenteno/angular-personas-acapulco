import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Persona } from 'src/app/models/Persona.model';
import { PersonaService } from 'src/app/services/Persona.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  public personaForm = new FormGroup({
    nombre: new FormControl('', [ Validators.required ]),
    edad: new FormControl(0, [ Validators.required, Validators.min(18), Validators.max(99) ]),
    sexo: new FormControl(null, [ Validators.required ])
  });

  public altaExitosa: boolean = false;
  public isSubmitted: boolean = false;

  get nombre() { return this.personaForm.get('nombre'); }
  get sexo() { return this.personaForm.get('sexo'); }
  get edad() { return this.personaForm.get('edad'); }

  public fileName: any = null;
  public fileAlert: any = null;
  public file: any = null;

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
  }

  guardarPersona() {
    this.isSubmitted = true;

    if(this.fileName){
      if(this.personaForm.valid){
        let persona: Persona = {
          nombre: this.personaForm.get('nombre')?.value,
          edad: this.personaForm.get('edad')?.value,
          sexo: this.personaForm.get('sexo')?.value,
          documento: this.fileName
        }
  
        this.personaService.personaAdd$.emit(persona);
        this.altaExitosa = true;
        this.isSubmitted = false;
        this.file = null;
        this.fileName = '';
        this.personaForm.reset();
  
        setTimeout(() => this.altaExitosa = false, 4000);
      }
    }else{
      this.fileAlert = 'Se requiere archivo';
    }
  }

  onFileSelected(event: any) {
    if(event.target.files.length > 0) 
     {
       this.fileName = event.target.files[0].name;
       this.fileAlert = null;
     }else{
       this.fileName = '';
     }
   }

}
