import { ChangeDetectionStrategy, Component, DoCheck, OnInit } from '@angular/core';
import { BaseComponent } from '../../base.component';

@Component({
  selector: 'app-a22',
  templateUrl: './a22.component.html',
  styleUrls: ['./a22.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class A22Component  implements OnInit , DoCheck {

  checkMessage: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    this.checkMessage += 'a22 checked , ';
  }
}
