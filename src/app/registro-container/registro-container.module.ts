import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

import { AngularMaterialModule } from '../shared/modules/angular-material.module';
import { HumanizeFormMessagesPipe } from '../shared/pipes/humanize-error.pipe';
import { FormComponent } from './form/form.component';
import { RegistroContainerComponent } from './registro-container.component';
import { RegistroContainerService } from './registro-container.service';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    RegistroContainerComponent,
    FormComponent,
    HumanizeFormMessagesPipe,
    TableComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    TextMaskModule,
    ],
  exports: [
    RegistroContainerComponent,
    AngularMaterialModule
  ],
  providers: [
    RegistroContainerService
  ]
})
export class RegistroContainerModule { }
