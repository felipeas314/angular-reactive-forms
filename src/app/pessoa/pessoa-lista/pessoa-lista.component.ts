import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-pessoa-lista',
  templateUrl: './pessoa-lista.component.html',
  styleUrls: ['./pessoa-lista.component.css']
})
export class PessoaListaComponent implements OnInit {

  pessoas: Pessoa[] = [];

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
    this.pessoaService.lista().subscribe(pessoas => this.pessoas = pessoas);
  }

}
