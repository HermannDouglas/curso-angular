import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  nomePortal: string;

  cursos: string[] = ['Java', 'Ext JS', 'Angular'];

  constructor() {
    this.nomePortal = 'http://loiane.training';

    for (let i=0; i<this.nomePortal.length; i++) {
      let curso = this.nomePortal[i];
    }

  }

  ngOnInit(): void {
  }

}
