import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RegistroModel } from 'src/app/models/registro.model';

import { RegistroContainerService } from '../registro-container.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @ViewChild(MatSort) sort: MatSort;
  
  registros: RegistroModel[];
  dataSource: MatTableDataSource<RegistroModel>;

  displayedColumns: string[] = [ 'nome', 'telefone', 'acoes' ];

  constructor(
    private service: RegistroContainerService, 
    private _liveAnnouncer: LiveAnnouncer) 
  { 
    this.service.registros$.subscribe(r => this.registros = r);
    this.dataSource = new MatTableDataSource(this.registros);
    this.dataSource.sort = this.sort;
  }

  onDelete(phone: string){
    this.service.deletePerson(phone.replace('/\D/g', ''));
  }

  announceSortChange(sortState) {

    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
