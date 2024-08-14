import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'test',
    loadChildren: () =>
      import('./../../../app-one/src/app/test/test.module').then(
        (module) => module.TestModule
      ),
  },
];
