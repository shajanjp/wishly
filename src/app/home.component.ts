import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

fm = null;
	constructor(public router: Router) {}

	onClick() {
		if (this.fm === '1') {
			this.router.navigate(['/welcome'], { queryParams: { page: '' } });
		} else if (this.fm === '2') {
			this.router.navigate(['/bye'], { queryParams: { page: '' } });
		}  
	}

}
