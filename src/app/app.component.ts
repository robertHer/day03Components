import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  randomComponent:boolean = false;
index:number;

  selectComponent(){
    this.randomComponent = true;
    // const index = Math.floor(Math.random()*3);
    this.index = Math.floor(Math.random()*3);
  //   if(!index){
  //     console.log('warning')
  //   }
  //   else if (index == 1){

  //   }
  //   else if(index == 2){}
  // }
    }}
