import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModerateComponent } from './moderate/moderate.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'moderate', component: ModerateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
