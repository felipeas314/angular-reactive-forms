import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { PessoaService } from '../pessoa.service';
import { Pessoa } from '../pessoa';

@Component({
  selector: 'app-pessoa-formulario',
  templateUrl: './pessoa-formulario.component.html',
  styleUrls: ['./pessoa-formulario.component.css']
})
export class PessoaFormularioComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private pessoaService: PessoaService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      primeiroNome: '',
      ultimoNome: '',
      telefones: this.formBuilder.array([])
    })
  }

  getTelefoneForms(): FormArray {
    return this.form.get('telefones') as FormArray;
  }

  adicionaTelefone() {

    const telefone = this.formBuilder.group({
      ddd: [],
      numero: []
    })

    this.getTelefoneForms().push(telefone);
  }

  deletaTelefone(i) {
    this.getTelefoneForms().removeAt(i);
  }

  adiciona(){
    this.pessoaService.adiciona(this.form.value);
    this.form.reset();
  }
}
