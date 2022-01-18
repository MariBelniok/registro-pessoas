import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistroModel } from 'src/app/models/registro.model';
import { Patterns, Masks } from '../../shared/utils/Patterns';
import { RegistroContainerService } from '../registro-container.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  phoneMask = Masks.masksTelefone;

  constructor(
    private fb: FormBuilder,
    private service: RegistroContainerService
  ) {
    this.form = this.fb.group({
      nome: [null, [Validators.required, Validators.pattern(Patterns.nomeCompleto)]],
      telefone: [null, [Validators.required, Validators.pattern(Patterns.telefone)]]
    });
  }

  ngOnInit(): void {
  }

  onAddPerson(){
    const model: RegistroModel = {
      nome: this.form.value.nome,
      telefone: this.form.value.telefone
    };

    this.service.addPerson(model);

    this.onCleanUp();
  }

  onCleanUp(){
    this.form.get('nome').reset();
    this.form.get('telefone').reset();
  }

}