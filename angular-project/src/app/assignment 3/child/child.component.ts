import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers: [DatePipe],
  
})
export class ChildComponent implements OnInit {
  serverStatus = [];
  time = Date.now();



  constructor() { 
    

   }

  ngOnInit(): void {
    
    
  }

  getColor(){
    this.serverStatus.push("1")
    console.log(this.serverStatus);
    return this.serverStatus.length < 4 ? 'red' : 'black' ;
    
    
  }

  getServerStatus(){

    return this.serverStatus;
    
    
    
  }

  pls(){
    this.serverStatus.push("1");
    console.log(this.serverStatus);
  }

}
