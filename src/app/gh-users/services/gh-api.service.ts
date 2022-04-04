import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GhRepository } from '../components/models/ghRepository';
import { GhUser } from '../components/models/ghUser';

@Injectable()
export class GhApiService {

  private readonly baseUrl: string = 'https://api.github.com/users' //readonly (é somente para leitura, o valor não poder ser alterado) (private, somente o serviço tem acesso a basdeUrl)

  constructor(
    private http: HttpClient
  ) { }

  findUser(username: string): Observable<GhUser> { // requisição http vai retornar sempre observable, o tipo do observale é a interface que criamos para receber os dados
    return this.http.get<GhUser>(`${this.baseUrl}/${username}`)
    }

  findUserRepository(username: string): Observable<GhRepository[]>{
    return this.http.get<GhRepository[]>(`${this.baseUrl}/${username}/repos`)
  }  
}
