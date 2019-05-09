import {Component, AfterViewInit, ElementRef, Renderer2, ViewChild, OnDestroy, OnInit} from '@angular/core';
import {ScrollPanel} from 'primeng/primeng';
import {Observable} from "rxjs";
import {Car, CarData} from "./car.model";
import {CarService} from "../service/car.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
    cols: {field:any, header:any}[];
    cars$: Observable<CarData>;

    car: Car;

    constructor(private carService: CarService,
                private router: Router){ //letak router utk navigate dri page dashboard ke detail page car
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    }

    ngOnInit(): void {
        this.cars$ = this.carService.findCar();
        this.cars$.subscribe(data=> console.log(data));
    }

    view(car:Car){
        this.router.navigate(['/car', car.vin])
    }
}
