import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LastUpdatedPipe } from './pipes/last-updated/last-updated.pipe';

const routes: Routes = [
  // Redirect from '/' to '/server-list'
  { path: '', redirectTo: 'server-list', pathMatch: 'full' },
  // Lazy load the server-list module and its child routes
  {
    path: 'server-list',
    loadChildren: () =>
      import('./server-info/server-info.module').then(
        (m) => m.ServerInfoModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
