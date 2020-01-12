import { Component, OnInit, Input, HostListener, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-app-file-upload',
  templateUrl: './app-file-upload.component.html',
  styleUrls: ['./app-file-upload.component.css'],
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:AppFileUploadComponent,
      multi:true
    }
  ]
})
export class AppFileUploadComponent implements OnInit {
  @Input() progress;
  onChange: Function;
  private file:File | null = null;
  @HostListener('change',['$evant.target.files']) emitFiles(event:FileList){
    const file = event && event.item(0);
    this.file = file;
  }
  constructor(private host:ElementRef<HTMLInputElement>) { }

  ngOnInit() {
  }

  wirteValue(value:null){
    this.host.nativeElement.value ='';
    this.file = null;
  }
  registerOnChange(fu:Function){
    this.onChange = fu;
  }
  registerOnTouched(fu:Function){

  }
}
