import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [
        MatToolbarModule,
        MatCardModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule
    ],
    exports: [
        MatToolbarModule,
        MatCardModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule
    ]
  })
  export class AngularMaterialModule { }