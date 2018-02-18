import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-me-in',
  templateUrl: './log-me-in.component.html',
  styleUrls: ['./log-me-in.component.css']
})
export class LogMeInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  login(){
    alert("Hello");
  }
}
