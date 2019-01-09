import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Pessoa } from './pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  subject: Subject<Pessoa[]> = new Subject();

  pessoas: Pessoa[] = [];

  constructor() { }

  adiciona(pessoa: Pessoa){
    this.pessoas.push(pessoa);
    this.subject.next(this.pessoas);
  }

  lista(): Observable<Pessoa[]> {
    return this.subject.asObservable();
  }

}
