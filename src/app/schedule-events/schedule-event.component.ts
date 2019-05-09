import {Component, AfterViewInit, ElementRef, Renderer2, ViewChild, OnDestroy, OnInit} from '@angular/core';
import {ScrollPanel} from 'primeng/primeng';
import {Observable} from "rxjs";
import {ScheduleEventService} from "../service/schedule-event.service";
import {ScheduleEvent, ScheduleEventData} from "./schedule-event.model";
import {Router} from "@angular/router";
import {Car} from "../dashboard/car.model";

@Component({
  selector: 'app-schedule-event',
  templateUrl: './schedule-event.component.html',
  styleUrls: ['./schedule-event.component.css']
})
export class ScheduleEventComponent implements OnInit{
    cols: {field:any, header:any}[];
    scheduleEvent$: Observable<ScheduleEventData>;

    scheduleEvent: ScheduleEvent;


    constructor(private scheduleEventService: ScheduleEventService,
                private router: Router){
        this.cols = [
            { field: 'id', header: 'ID' },
            { field: 'title', header: 'Title' },
            { field: 'start', header: 'Start' },
            { field: 'end', header: 'End' }
        ];
    }

    ngOnInit(): void {
        this.scheduleEvent$ = this.scheduleEventService.findScheduleEvent();
        this.scheduleEvent$.subscribe(data=> console.log(data));
    }

    view(scheduleEvent: ScheduleEvent){
        this.router.navigate(['/schedule-event', scheduleEvent.id])
    }
}
