import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'danger-message',
  templateUrl: './danger-message.component.html',
  styleUrls: ['./danger-message.component.css']
})
export class DangerMessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  IsHidden= true;
  onSelect(){
    this.IsHidden= !this.IsHidden;
   }
}
