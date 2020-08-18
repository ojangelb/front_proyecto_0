import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EventComponent} from './event/event.component';
// import { EventeDelete} from './event/delete/delete.component';
// import { EventList} from './event/get/get.component';
// import { EventAdd} from './event/add/add.component';
// import { EventUpdate} from './event/update/update.component'; 

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'event', component: EventComponent},
  // {path: 'eventDelete', component: EventeDelete},
  // {path: 'eventList', component: EventList},
  // {path: 'eventAdd', component: EventAdd},
  // {path: 'eventUpdate', component: EventUpdate}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
