import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { AuthServiceService } from '../../auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  user: User = new User();
  submitted = false;

  constructor(private eventService: AuthServiceService,
              private router: Router) { }

  ngOnInit() {
  }

  newEvent(): void {
    this.submitted = false;
    this.user = new User();
  }

  save() {
    this.eventService.createEvent(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();

  }

  onSubmit() {
    this.submitted = true;
    this.save();
    this.router.navigate(['/']);
  }
}
