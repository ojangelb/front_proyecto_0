import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/event.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Event } from '../event';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id: string;
  event: Event;

  constructor(private route: ActivatedRoute, private router: Router,
              private eventService: EventService) { }

  ngOnInit() {
    this.event = new Event();

    this.id = this.route.snapshot.params.id;

    this.eventService.getEventId(this.id)
      .subscribe(data => {
        console.log(data);
        this.event = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['event']);
  }
}
