import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

export interface Prospect {
  name: string,
  surname: string,
  age: number,
  direction: string,
  phone: string,
  company: string,
  position: string,
  observations: string,
  email: string,
}

@Injectable({
  providedIn: 'root'
})
export class ProspectsService {

  private prospects: Prospect[];
  private prospects$: Subject<Prospect[]>;

  constructor() {
    this.prospects = [];
    this.prospects$ = new Subject();
  }

  addProspect(prospect: Prospect): void {
    this.prospects.push(prospect);
    this.prospects$.next(this.prospects);
  }

  getProspects$():Observable<Prospect[]> {
    return this.prospects$.asObservable();
  }
}
