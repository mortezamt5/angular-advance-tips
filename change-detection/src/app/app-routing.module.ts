import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'default', pathMatch: 'full' },
  {
    path: 'default',
    loadChildren: () =>
      import('./default-strategy/default-strategy.module').then(
        (m) => m.DefaultStrategyModule
      ),
  },
  {
    path: 'onpush',
    loadChildren: () =>
      import('./onpush-strategy/onpush-strategy.module').then(
        (m) => m.OnPushStrategyModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
