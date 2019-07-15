import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-dream-app';
  u:string;
  u1:string;
  u2:string;
  u3:string;
  u4:string;
  u5:string;
  urlM(mess : string){
    this.u = mess;
  }
  fname(mess2 :string){
    this.u1 = mess2;
  }
  lname(mess3 :string){
    this.u2 = mess3;
  }
  eml12(mess4 :string){
    this.u3 = mess4;
  }
  ph12(mess5 :string){
    this.u4 = mess5;
  }
  bd12(mess6 :string){
    this.u5 = mess6;
    console.log(mess6);
  }
}
