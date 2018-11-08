import { Component } from '@angular/core';

@Component({
  	selector: 'app-root',
		templateUrl: './app.component.html',
  	styleUrls: ['./app.component.css']
})
export class AppComponent {

  	scroll(el) {
    	el.scrollIntoView();
	}
	  
	visibility: boolean = true;
	invisibility: boolean = false;

  transfer(){
		this.visibility=!this.visibility;
		this.invisibility=!this.invisibility;
	}

	visibilityRightMenu: boolean = true;
	invisibilityRightMenu: boolean = false;

	/*window.onscroll = {myFunction()};

	myFunction() {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        document.getElementById("myImg").className = "slideUp";
		}
		https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onscroll3
}*/
}
