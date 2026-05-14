import { Livro } from './../../model/livro';
import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.scss']
})
export class ListaLivrosComponent implements OnInit {

  livros = Observable<Livro[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
