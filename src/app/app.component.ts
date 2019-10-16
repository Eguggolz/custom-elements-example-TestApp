import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  loaded:boolean =false;
  constructor(){
    this.loadScript();
  }
  public loadScript(): void{
    if(this.loaded){
      return;
    }else{
      const script = document.createElement('script');
      script.src ="assets/custom-elements.js";
      document.body.appendChild(script);
      this.loaded = true;
    }
  }

}
