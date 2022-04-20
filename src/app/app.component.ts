import { Component } from '@angular/core';
import { ServiceService } from './services/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private service: ServiceService) { 

  }

  ngOnInit() {
    this.getAdvice()
  }
  

  getAdvice(){
    this.service.getAdvice().subscribe( (success) => {
      console.log(success)
    }, (error) => {
      console.log(error)
    })
  }
}
