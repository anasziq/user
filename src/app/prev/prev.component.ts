import { Component, OnInit ,  Input } from '@angular/core';

@Component({
  selector: 'prev',
  templateUrl: './prev.component.html',
  styleUrls: ['./prev.component.scss']
})
export class PrevComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() url : string;
  @Input() fn : string;
  @Input() ln : string;
  @Input() em : string;
  @Input() ph : string;
  @Input() bd : string;
}
