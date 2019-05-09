import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FileData} from "../file/file.model";

@Injectable()
export class FileService{
    constructor(private http: HttpClient) {
    }

    findFile(): Observable<FileData>{
        return this.http.get<FileData>('assets/demo/data/files.json');
    }
}
