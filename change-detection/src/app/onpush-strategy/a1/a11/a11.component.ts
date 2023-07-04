import { Component, DoCheck, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-a11',
  templateUrl: './a11.component.html',
  styleUrls: ['./a11.component.scss']
})
export class A11Component  implements OnInit , DoCheck {
  @Input() data: string[] = [];
  checkMessage: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    this.checkMessage += 'a11 checked , ';
  }

  changeData() {
    this.data.push(`a${this.data.length + 1}`);
  }
}
