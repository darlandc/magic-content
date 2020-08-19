import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private API = "https://api.github.com/";

  constructor(private http: HttpClient) { }

  getRepos(){
    const endpoint = 'users/darlandc/repos';
    return this.http.get<any>(this.API + endpoint);
  }
}
