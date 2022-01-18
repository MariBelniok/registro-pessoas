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
      name: [null, [Validators.required, Validators.pattern(Patterns.nomeCompleto)]],
      phone: [null, [Validators.required, Validators.pattern(Patterns.telefone)]]
    });
  }

  ngOnInit(): void {
  }

  onAddPerson(){
    const model: RegistroModel = {
      name: this.form.value.name,
      phone: this.form.value.phone
    };

    this.service.addPerson(model);

    this.onCleanUp();
  }

  onCleanUp(){
    this.form.get('name').reset();
    this.form.get('phone').reset();
  }

}