import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { A1Component } from './a1/a1.component';
import { A11Component } from './a1/a11/a11.component';
import { A12Component } from './a1/a12/a12.component';
import { A2Component } from './a2/a2.component';
import { A21Component } from './a2/a21/a21.component';
import { A22Component } from './a2/a22/a22.component';
import { DefaultStrategyComponent } from './default-strategy.component';

const routes: Route[] = [
  {
    path: '',
    component: DefaultStrategyComponent,
    children: [{ path: '', component: A1Component }],
  },
];

@NgModule({
  declarations: [
    DefaultStrategyComponent,
    A1Component,
    A2Component,
    A11Component,
    A21Component,
    A12Component,
    A22Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DefaultStrategyModule { }
