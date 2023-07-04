import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  DoCheck,
  ChangeDetectorRef,
} from '@angular/core';
import { BaseComponent } from '../../base.component';

@Component({
  selector: 'app-a12',
  templateUrl: './a12.component.html',
  styleUrls: ['./a12.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class A12Component  implements OnInit, DoCheck {
  @Input() data: string[] = [];
  checkMessage: string = '';
  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    // this.cd.detectChanges();
  }
  changeData() {
    this.data.push(`a${this.data.length + 1}`);
  }
}
