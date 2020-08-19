import { GithubService } from './services/github.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = 'magic-content';
  show = true;
  label = 'showing!';
  itemList = ['item 1', 'item 2'];
  repositories = [];

  constructor(private github: GithubService){
    this.repositories = [];
  }

  public toggle() {
    this.show = !this.show;
    // this.show ? (this.label = 'showing!') : (this.label = 'hidding!');
  }

  getRepositories(){
    this.show = false;
    setTimeout(() => {
      this.show = true;
    }, 300);
    this.github.getRepos().subscribe(
      (res)=> {
        console.log(res);
        this.repositories = res;
      },
      (err)=> {
        console.log(err);
      },
      ()=> {
        console.log('third function!');
      }
    )
  }

  clear(){
    this.repositories = [];
  }
}
