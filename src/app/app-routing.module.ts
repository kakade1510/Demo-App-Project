import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { RegistrationPopupComponent } from './components/registration-popup/registration-popup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent } from './layout/navbar/navbar.component';

const routes: Routes = [
   {path:'', redirectTo:'home', pathMatch:'full'},
  {path:"", component:HomeComponent},
  {path: "registration" , component:RegistrationPopupComponent},
  {path: "profile" , component:ProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  