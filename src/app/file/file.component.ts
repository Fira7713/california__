import {Component, AfterViewInit, ElementRef, Renderer2, ViewChild, OnDestroy, OnInit} from '@angular/core';
import {ScrollPanel} from 'primeng/primeng';
import {Observable} from "rxjs";
import {FileData} from "./file.model";
import {FileService} from "../service/file.service";

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit{
    cols: {field:any, header:any}[];
    file$: Observable<FileData>;

    constructor(private fileService: FileService){
        this.cols = [
            { field: 'label', header: 'Label' },
            { field: 'data', header: 'data' },
            { field: 'expandedIcon', header: 'expandedIcon' },
            { field: 'collapsedIcon', header: 'collapsedIcon' },
            { field: 'icon', header: 'icon' },
            { field: 'children = Files[]', header: 'Files' },

        ];

    }

    ngOnInit(): void {
        this.file$ = this.fileService.findFile();
        this.file$.subscribe(data=> console.log(data));
    }
}
