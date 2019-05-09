export interface ScheduleEvent{

    id:number;
    title:string;
    start: string;
    end: string;

    // vin: string;
    // year: number;
    // brand: string;
    // color: string;

}


export interface ScheduleEventData {
    data : ScheduleEvent[];
}
