import { Component, OnInit , Input, DoCheck } from '@angular/core';
import { BaseComponent } from '../../base.component';

@Component({
  selector: 'app-a12',
  templateUrl: './a12.component.html',
  styleUrls: ['./a12.component.scss'],
})
export class A12Component  implements OnInit , DoCheck {
  @Input() data: string[] = [];
  checkMessage: string = '';
  constructor() {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    this.checkMessage += 'a12 checked , ';
  }
  changeData() {
    this.data.push(`a${this.data.length + 1}`);
  }
}
