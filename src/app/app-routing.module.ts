import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModerateComponent } from './moderate/moderate.component';
import { SpacewalkComponent } from './spacewalk/spacewalk.component';
import { StartShowComponent } from './start-show/start-show.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'moderate', component: ModerateComponent},
  { path: 'spacewalk', component: SpacewalkComponent},
  { path: 'start-show', component: StartShowComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
