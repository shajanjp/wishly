import { NgModule } from '@angular/core';
import { LoadChildren, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { WelcomeComponent } from './welcome.component';
import { ByeComponent } from './bye.component';

const routes: Routes = [
{
  path: '',
  component: HomeComponent
},
{
  path: 'welcome',
  component: WelcomeComponent
},
{
  path: 'bye',
  component: ByeComponent
}

];

@NgModule({
  imports: [
  RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}