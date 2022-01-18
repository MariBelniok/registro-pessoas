import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RegistroModel } from '../models/registro.model';

@Injectable()
export class RegistroContainerService {
  private _registros = new BehaviorSubject<RegistroModel[]>([]);
  public readonly registros$: Observable<RegistroModel[]> = this._registros.asObservable();

  constructor() { }

  public addPerson(registro: RegistroModel){
    let registros = this._registros.getValue();

    if (registros.find(r => r === registro )) {
      throw new Error;
    }

    registros.push(registro);

    this._registros.next([...registros]);
  }

  public deletePerson(telefone: string){
    let registros = this._registros.getValue();

    registros = registros.filter(r => r.telefone.replace('/\D/g', '') !== telefone);

    this._registros.next([...registros]);
  }

  public cleanForm(){
    const registros = [];

    this._registros.next([...registros]);
  }

}
