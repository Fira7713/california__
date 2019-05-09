import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Car, CarData} from "../dashboard/car.model";
import {map} from "rxjs/operators";

@Injectable()
export class CarService{
    constructor(private http: HttpClient) {
    }

    findCar(): Observable<CarData>{
        return this.http.get<CarData>('assets/demo/data/cars-large.json');
    }

    findCarsByVin(vin:string): Observable<Car>{
        return this.http.get<CarData>('assets/demo/data/cars-large.json')
            .pipe(
                map((carData: CarData)=>
                carData.data.filter(car=>car.vin === vin)[0]
                )
            );
    }

    findCarsByFilter(filter:string): Observable<Car[]>{
        let f = filter.toUpperCase();
        return this.http.get<CarData>('assets/demo/data/cars-large.json')
            .pipe(
                map((carData: CarData)=>
                    carData.data
                        .filter(car=>
                        ((car.vin.toUpperCase().includes(f))
                            || (car.color.toUpperCase().includes(f))
                            || (car.brand.toUpperCase().includes(f))
                            || (car.year.toString().includes(f))
                        )
                )
                )
            );
    }
}
