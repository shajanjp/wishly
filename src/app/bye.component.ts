import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-bye',
  templateUrl: './bye.component.html'
})
export class ByeComponent implements OnInit{
  
  info = null;
  constructor (public activatedRoute: ActivatedRoute) {}
  ngOnInit() {
  	this.activatedRoute.queryParams.subscribe(params => {
          this.info = params.page;
      });
  }
}




