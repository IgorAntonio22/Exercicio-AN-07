import { Component, OnInit } from '@angular/core';
import { GhApiService } from '../../services/gh-api.service';
import { GhRepository } from '../models/ghRepository';
import { GhUser } from '../models/ghUser';

@Component({
  selector: 'app-gh-dialog',
  templateUrl: './gh-dialog.component.html',
  styleUrls: ['./gh-dialog.component.css']
})
export class GhDialogComponent implements OnInit {

  username: string = ''
  user!: GhUser
  repository!: GhRepository[]

  constructor( // injetando o service (gh-api.service) no componente (injeção de dependência)
    private ghService: GhApiService
  ) { }

  ngOnInit(): void {
    this.ghService.findUser(this.username).subscribe( // funções de sucesso, erro e concluido.
    (ghUser) => {
      this.user = ghUser // para dentro de uma propriedade do angular chamada user (da pra ver no visualizador do angular na web, no gh-dialog)

    
    }, (error) => console.log('Erro: ' + error)

    )  //é necessário se inscrever nesse observable que vai ser retornado (.subscribe)

    
  this.ghService.findUserRepository(this.username).subscribe(
      (data) => {

        this.repository = data

        }, (error) => console.log('Erro: ' + error)
    )
  }

}
