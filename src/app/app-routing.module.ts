import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent} from './pages/landing/landing.component';
import { LandingEnComponent} from './pages/landing-en/landing-en.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'es', component: LandingComponent },
  { path: 'en', component: LandingEnComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
