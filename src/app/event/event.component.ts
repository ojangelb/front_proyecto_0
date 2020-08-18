import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventService } from '../../app/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  events: Observable<Event[]>;

  constructor(private eventservice: EventService,
              private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    const token = 'Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im9qYW5nZWxiMSIsImlhdCI6MTU5Nzc1NTYzOSwiZXhwIjoxNTk3NzU5MjM5fQ.hbvk3pD2hytwVc2_A2Cpk-EKZ-qMTULmQkMxZtFNt3E';
    this.events = this.eventservice.getEventsList(token);
  }

  deleteEvent(id: string) {
    this.eventservice.deleteEvent(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateEvent(id: string){
    this.router.navigate(['update', id]);
  }

  detailEvent(id: string){
    this.router.navigate(['details', id]);
  }
}
