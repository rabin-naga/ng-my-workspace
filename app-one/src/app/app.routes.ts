import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'test',
    loadChildren: () =>
      import('./test/test.module').then((module) => module.TestModule),
  },
];
