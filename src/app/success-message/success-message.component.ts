import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'success-message',
  templateUrl: './success-message.component.html',
  styles: [`
  div.dropdown-content{
    background-color: #5cb85c;
    border: 1px solid #4cae4c;
    border-radius: 5px;
    width: 50%;
    margin-top: 5px;
}
h1{
    color: white;
}
  
  `]
})
export class SuccessMessageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  IsHidden= true;

onSelect(){
 this.IsHidden= !this.IsHidden;
}

}
