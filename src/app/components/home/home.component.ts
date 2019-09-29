import { Component, OnInit } from '@angular/core';
import { GetValueService } from 'src/app/service/get-value.service';
import { Indicator } from 'src/app/models/indicator.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

 
  public data: Indicator;
  public objs: Indicator[];
  public readonly Math = Math;

  constructor(private service: GetValueService) { }

  ngOnInit() {
   
  }
  ngAfterViewInit(){
    setInterval( () => {
        this.service.getValueApi().subscribe(data => {
        this.objs = data;
      }); 
    }, 500);
    debugger
  }
  
  percent(value, minvalue, maxvalue){
      return (Math.floor((value - minvalue) / ((maxvalue - minvalue) / 100)))
  }

}
