import {Component, AfterViewInit, ElementRef, Renderer2, ViewChild, OnDestroy, OnInit} from '@angular/core';
import {ScrollPanel} from 'primeng/primeng';
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ScheduleEvent} from "../schedule-event.model";
import {ScheduleEventService} from "../../service/schedule-event.service";

@Component({
  selector: 'app-schedule-event-detail',
  templateUrl: './schedule-event-detail.page.html',
  styleUrls: ['./schedule-event-detail.page.css']
})
export class ScheduleEventDetailPage implements OnInit{

    scheduleEvent$: Observable<ScheduleEvent>;
    scheduleEventForm: FormGroup;


    constructor(private scheduleEventService: ScheduleEventService,
                private route: ActivatedRoute,
                private fb: FormBuilder){

    }

    ngOnInit(): void {

        this.scheduleEventForm = this.fb.group({
            id: [0],
            title: [''],
            start: [''],
            end: [''],
            scheduleEvent: ['']
        });


        this.route.params
            .subscribe((data: {id:string})=>{
            this.scheduleEvent$ = this.scheduleEventService.findScheduleEventById(data.id);
        });

        this.scheduleEvent$.subscribe(data=>{
            if(data){
                this.scheduleEventForm.patchValue(data);
            }
        });
    }

    submit() {
        console.log(this.scheduleEventForm.value)
    }
}
