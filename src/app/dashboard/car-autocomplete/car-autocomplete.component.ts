import {Component, Input, ViewChild} from "@angular/core";
import {AutoComplete} from "primeng/primeng";
import {FormControl} from "@angular/forms";
import {Car, CarData} from "../car.model";
import {CarService} from "../../service/car.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
    selector: 'trg-car-autocomplete',
    templateUrl: './car-autocomplete.component.html',
    styleUrls: ['./car-autocomplete.component.scss']
})
export class CarAutocomplete{

    @Input() hideFloatLabel = false;
    @Input() innerFormControl: FormControl;
    car: Car;
    cars: Car[];
    @ViewChild('p') autoComplete: AutoComplete;

    constructor(private carService: CarService){
    }

    search(evt) {
        console.log(evt);
        this.carService.findCarsByFilter(evt.query)
            .subscribe(cars=>{
                this.cars = cars;
            })
    }



}
