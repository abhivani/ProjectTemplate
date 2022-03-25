import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealerRegistrationComponent } from './component/dealer-registration/dealer-registration.component';

const routes: Routes = [
  {path:'dealerReg',component:DealerRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
