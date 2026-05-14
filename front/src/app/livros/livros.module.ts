import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LivrosRoutingModule } from './livros-routing.module';
import { ListaLivrosComponent } from './components/lista-livros/lista-livros.component';
import { CreateLivrosComponent } from './components/create-livros/create-livros.component';
import { AppMaterialModule } from "src/app/shared/app-material/app-material.module";


@NgModule({
  declarations: [
    ListaLivrosComponent,
    CreateLivrosComponent
  ],
  imports: [
    CommonModule,
    LivrosRoutingModule,
    AppMaterialModule
]
})
export class LivrosModule { }
