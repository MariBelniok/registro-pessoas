import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
@NgModule({
    imports: [
        MatToolbarModule,
        MatCardModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatTableModule,
        MatSortModule,
        MatDividerModule
    ],
    exports: [
        MatToolbarModule,
        MatCardModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatTableModule,
        MatSortModule,
        MatDividerModule
    ]
  })
  export class AngularMaterialModule { }