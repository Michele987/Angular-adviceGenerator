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
  
  }

  objId:any = []
  objAdvice:any = []


  nextAdvice(){


    this.service.getAdvice().subscribe( (success) => {

      this.objId = "Advice #" + success.slip.id
      this.objAdvice = success.slip.advice

    }, (error) => {


    })
  }

  
}
