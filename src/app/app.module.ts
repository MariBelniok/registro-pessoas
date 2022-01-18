import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { TextMaskModule } from 'angular2-text-mask';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { AngularMaterialModule } from './shared/modules/angular-material.module';
import { HumanizeFormMessagesPipe } from './shared/pipes/humanize-error.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HumanizeFormMessagesPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    TextMaskModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
