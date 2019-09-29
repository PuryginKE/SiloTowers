import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Indicator } from '../models/indicator.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GetValueService {

  public min;
  public max;

  constructor(
    public http: HttpClient
    
  ) { }

  public getValueApi(): Observable<Indicator[]>{
    return this.http.get<Indicator[]>('https://api.exmo.com/v1/trades/?pair=BTC_USD').pipe(
      map(data => {
          const _data= this.mapData(data);
          this.min = _data[0].value;
          this.max = this.min;
          _data.forEach(item => {
            if(item.value> this.max){
               this.max = item.value;
            }
         
            if(item.value<this.min){
               this.min = item.value;
            }
          });
         
          return _data.slice(0,5);  
        })
      );
    }
  
  mapData(data){
    return data.BTC_USD.map((item) => {
      return {
        id: item.trade_id-110000000,
        value: Math.ceil(item.price),
        title: new Date(item.date*1000).toLocaleTimeString(),
      }
    });
  }

}
