import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Car, CarData} from "../dashboard/car.model";
import {ScheduleEvent, ScheduleEventData} from "../schedule-events/schedule-event.model";
import {map} from "rxjs/operators";

@Injectable()
export class ScheduleEventService{
    constructor(private http: HttpClient) {
    }

    findScheduleEvent(): Observable<ScheduleEventData>{
        return this.http.get<ScheduleEventData>('assets/demo/data/scheduleevents.json');
    }

    findScheduleEventById(id:string): Observable<ScheduleEvent>{
        return this.http.get<ScheduleEventData>('assets/demo/data/scheduleevents.json')
            .pipe(
                map((scheduleEventData: ScheduleEventData)=>
                    scheduleEventData.data.filter(scheduleEvent=>scheduleEvent.id.toString() === id)[0]
                )
            );
    }
    findScheduleEventFilter(filter:string): Observable<ScheduleEvent[]>{
        let f = filter.toUpperCase();
        return this.http.get<ScheduleEventData>('assets/demo/data/scheduleevents.json')
            .pipe(
                map((scheduleEventData: ScheduleEventData)=>
                    scheduleEventData.data
                        .filter(scheduleEvent=>
                            ((scheduleEvent.id.toString().includes(f))
                                || (scheduleEvent.title.toUpperCase().includes(f))
                                || (scheduleEvent.start.toUpperCase().includes(f))

                            )
                        )
                )
            );
    }


}
