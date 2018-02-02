import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html'
})
export class WelcomeComponent implements OnInit{

	info = null;
	constructor (public activatedRoute: ActivatedRoute) {}
  ngOnInit() {
  	this.activatedRoute.queryParams.subscribe(params => {
          this.info = params.page;
      });
  }
    
}
