import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PessoaFormularioComponent } from './pessoa-formulario/pessoa-formulario.component';
import { PessoaListaComponent } from './pessoa-lista/pessoa-lista.component';
import { PessoaService } from './pessoa.service';

@NgModule({
  declarations: [PessoaFormularioComponent, PessoaListaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [PessoaFormularioComponent,PessoaListaComponent],
  providers:[PessoaService]
})
export class PessoaModule { }
