import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RegistroModel } from 'src/app/models/registro.model';

import { RegistroContainerService } from '../registro-container.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  dataSource: MatTableDataSource<RegistroModel>;

  displayedColumns: string[] = ['nome', 'telefone', 'acoes'];
  
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(
    private service: RegistroContainerService
  ) {

  }
  ngOnInit(): void {
    this.service.registros$
      .pipe()
      .subscribe(r => {
        this.dataSource = new MatTableDataSource(r);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
  }

  onDelete(phone: string) {
    this.service.deletePerson(phone.replace('/\D/g', ''));
  }

  onCleanForm(){
    this.service.cleanForm();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
