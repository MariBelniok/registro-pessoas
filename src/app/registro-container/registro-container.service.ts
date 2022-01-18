import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RegistroModel } from '../models/registro.model';

@Injectable()
export class RegistroContainerService {
  private _registro = new BehaviorSubject<RegistroModel[]>(null);
  public readonly registro$: Observable<RegistroModel[]> = this._registro.asObservable();

  constructor() { }

}
