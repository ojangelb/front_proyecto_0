import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/event.service';
import { Router } from '@angular/router';
import { Event } from '../event';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  event: Event = new Event();
  submitted = false;

  constructor(private eventService: EventService,
              private router: Router) { }

  ngOnInit() {
  }

  newEvent(): void {
    this.submitted = false;
    this.event = new Event();
  }

  save() {
    this.eventService.createEvent(this.event)
      .subscribe(data => console.log(data), error => console.log(error));
    this.event = new Event();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/event']);
  }

}
