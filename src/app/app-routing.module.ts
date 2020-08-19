import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EventComponent } from './event/event.component';
import { AddComponent } from './event/add/add.component';
import { UpdateComponent } from './event/update/update.component';
import { DetailComponent } from './event/detail/detail.component';
import { CreateComponent } from './user/create/create.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'event', component: EventComponent },
  { path: 'create-user', component: CreateComponent },
  { path: 'add', component: AddComponent },
  { path: 'details/:id', component: DetailComponent },
  { path: 'update/:id', component: UpdateComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
