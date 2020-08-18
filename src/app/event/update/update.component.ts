import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../event';
import { EventService } from 'src/app/event.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id: string;
  event: Event;

  constructor(private route: ActivatedRoute, private router: Router,
              private eventService: EventService) { }

  ngOnInit() {
    this.event = new Event();

    this.id = this.route.snapshot.params['id'];

    this.eventService.getEventId(this.id)
      .subscribe(data => {
        console.log(data);
        this.event = data;
      }, error => console.log(error));
  }

  updateEvent() {
    this.eventService.updateEvent(this.id, this.event)
      .subscribe(data => console.log(data), error => console.log(error));
    this.event = new Event();
    this.gotoList();
  }

  onSubmit() {
    this.updateEvent();
  }

  gotoList() {
    this.router.navigate(['/event']);
  }

}
