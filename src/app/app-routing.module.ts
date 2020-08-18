import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EventComponent} from './event/event.component';
// import { EventeDelete} from './event/delete/delete.component';
// import { EventList} from './event/get/get.component';
import { AddComponent} from './event/add/add.component';
import { UpdateComponent} from './event/update/update.component';
import { DetailComponent } from './event/detail/detail.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'event', component: EventComponent},
  // {path: 'eventDelete', component: EventeDelete},
  // {path: 'eventList', component: EventList},
   {path: 'add', component: AddComponent},
   { path: 'details/:id', component: DetailComponent },
   { path: 'update/:id', component: UpdateComponent }
  // {path: 'eventUpdate', component: EventUpdate}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
