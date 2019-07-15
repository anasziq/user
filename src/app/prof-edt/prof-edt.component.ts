import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'prof-edt',
  templateUrl: './prof-edt.component.html',
  styleUrls: ['./prof-edt.component.scss']
})
export class ProfEdtComponent implements OnInit {
  public radioData: any;
  
  ngOnInit() {
   
    
  }
  constructor() { }
  url: string;
  frstNa:string;
  @Output() emitEvent = new EventEmitter();
  @Output() emitEvent2 = new EventEmitter();
  @Output() emitEvent3 = new EventEmitter();
  @Output() emitEvent4 = new EventEmitter();
  @Output() emitEvent5 = new EventEmitter();
  @Output() emitEvent6 = new EventEmitter();
  @Output() emitEvent7 = new EventEmitter();
  fname = '';
  lname = '';
  eml='';
  phone='';
  brth='';
  
  gend(event : any){
    console.log("hello");
  }
  onKey(event: any) { // without type info
    this.fname = event.target.value;
    this.emitEvent2.next(this.fname);
    console.log(this.radioData);
  }
  onKey2(event: any) { // without type info
    this.lname = event.target.value;
    this.emitEvent3.next(this.lname);
  }
  onKey3(event: any) { // without type info
    this.eml = event.target.value;
    this.emitEvent4.next(this.eml);

  }
  onKey4(event: any) { // without type info
    this.phone = event.target.value;
    this.emitEvent5.next(this.phone);

  }
  onKey5(event: any) { // without type info
    this.brth = event.target.value;
    this.emitEvent6.next(this.brth);

  }
  
  

 
  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        console.log("ths" + typeof (this));
        this.url = event.target.result;
        this.emitEvent.next(this.url);
      }
    }
  }
  

  
}
