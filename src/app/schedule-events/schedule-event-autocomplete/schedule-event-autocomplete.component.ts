import {Component, Input, ViewChild} from "@angular/core";
import {AutoComplete} from "primeng/primeng";
import {FormControl} from "@angular/forms";
import {CarService} from "../../service/car.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {ScheduleEvent} from "../schedule-event.model";
import {ScheduleEventService} from "../../service/schedule-event.service";

@Component({
    selector: 'trg-event-autocomplete',
    templateUrl: './schedule-event-autocomplete.component.html',
    styleUrls: ['./schedule-event-autocomplete.component.scss']
})
export class EventAutocomplete{

    @Input() hideFloatLabel = false;
    @Input() innerFormControl: FormControl;
    scheduleEvent: ScheduleEvent;
    scheduleEvents: ScheduleEvent[];
    @ViewChild('p') autoComplete: AutoComplete;

    constructor(private scheduleEventService: ScheduleEventService){
    }

    search(evt) {
        console.log(evt);

        this.scheduleEventService.findScheduleEventFilter(evt.query)
            .subscribe(scheduleEvents=>{
                this.scheduleEvents = scheduleEvents;
            })
    }



}
