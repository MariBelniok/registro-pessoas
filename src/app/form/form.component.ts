import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Patterns, Masks } from '../shared/utils/Patterns';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  phoneMask = Masks.masksTelefone;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.pattern(Patterns.nomeCompleto)]],
      phone: [null, [Validators.required, Validators.pattern(Patterns.telefone)]]
    });
  }

  ngOnInit(): void {
  }

  onAddPerson(){

  }

}