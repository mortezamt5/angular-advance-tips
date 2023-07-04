import { Component, DoCheck, OnInit } from '@angular/core';
import { BaseComponent } from './base.component';

@Component({
  selector: 'app-default-strategy',
  templateUrl: './default-strategy.component.html',
  styleUrls: ['./default-strategy.component.scss']
})
export class DefaultStrategyComponent  implements OnInit , DoCheck {

  checkMessage: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    this.checkMessage += 'default strategy checked , ';
  }

}
