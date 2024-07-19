import { Component  } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {
  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
  //public deletedHero: string = ''; // esta es una forma
  public deletedHero?: string; // esta es otra forma

  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();
  }

}
