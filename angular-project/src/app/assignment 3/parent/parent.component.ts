import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  showSecret = false;
  log = [];

  onToggleDetails(){
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1)
  }



  constructor() {
 
   }

  ngOnInit(): void {
  }



  getColor(){
    return this.log.length > 5 ? 'green' : 'red';
}


}
