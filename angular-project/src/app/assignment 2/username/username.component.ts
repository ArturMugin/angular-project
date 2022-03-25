import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {
  }

  userName = "";
  filled = false;


  // onUpdateUserName(event: Event){
  //   this.userName = (<HTMLInputElement>event.target).value;
  //   if (this.userName != ""){
  //     this.filled = true;
  //   }
  //   else {
  //     this.filled = false;
  //   }
  // }

  onSubmit(){
    this.userName = "";
    // this.filled = false;
  }

}
