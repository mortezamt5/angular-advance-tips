import { Component, DoCheck, OnInit } from '@angular/core';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-a1',
  templateUrl: './a1.component.html',
  styleUrls: ['./a1.component.scss'],
})
export class A1Component  implements OnInit , DoCheck {
  checkMessage: string = '';
  data: string[] = ['a1', 'a2', 'a3'];
  constructor() {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    this.checkMessage += 'a1 checked , ';
  }

  changeData() {
    this.data.push(`a${this.data.length + 1}`);
  }
}
