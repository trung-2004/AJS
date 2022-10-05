import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
})
export class WeatherComponent {
  city: string = 'thanhpho';
  temp: number = 0;
  hump: number = 0;
  press: number = 0;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {// hàm này tự động chạy sau khi in ra HTML
    // this.hanoi();
    // this.london();
    // this.berlin();
    // this.newyork();
    // this.saigon();
    // this.tokyo();
    // this.newyork()
  }

  hanoi(){
    //lấy thông tin thời tiết hà nội
    const url= 'https://api.openweathermap.org/data/2.5/weather?q=Hanoi&appid=09a71427c59d38d6a34f89b47d75975c&units=metric'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.temp = data.main.temp;
        this.hump = data.main.humidity;
        this.press = data.main.pressure;
        this.city = data.name+","+ data.sys.country;

    })
  }
  saigon(){
    //lấy thông tin thời tiết hà nội
    const url= 'https://api.openweathermap.org/data/2.5/weather?q=saigon&appid=09a71427c59d38d6a34f89b47d75975c&units=metric'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.temp = data.main.temp;
        this.hump = data.main.humidity;
        this.press = data.main.pressure;
        this.city = data.name+","+ data.sys.country;

      })
  }
  london(){
    //lấy thông tin thời tiết hà nội
    const url= 'https://api.openweathermap.org/data/2.5/weather?q=london&appid=09a71427c59d38d6a34f89b47d75975c&units=metric'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.temp = data.main.temp;
        this.hump = data.main.humidity;
        this.press = data.main.pressure;
        this.city = data.name+","+ data.sys.country;

      })
  }
  newyork(){
    //lấy thông tin thời tiết hà nội
    const url= 'https://api.openweathermap.org/data/2.5/weather?q=new york&appid=09a71427c59d38d6a34f89b47d75975c&units=metric'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.temp = data.main.temp;
        this.hump = data.main.humidity;
        this.press = data.main.pressure;
        this.city = data.name+","+ data.sys.country;

      })
  }
  tokyo(){
    //lấy thông tin thời tiết hà nội
    const url= 'https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=09a71427c59d38d6a34f89b47d75975c&units=metric'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.temp = data.main.temp;
        this.hump = data.main.humidity;
        this.press = data.main.pressure;
        this.city = data.name+","+ data.sys.country;

      })
  }
  berlin(){
    //lấy thông tin thời tiết hà nội
    const url= 'https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=09a71427c59d38d6a34f89b47d75975c&units=metric'
    this.http.get<any>(url)
      .subscribe(data=>{
        this.temp = data.main.temp;
        this.hump = data.main.humidity;
        this.press = data.main.pressure;
        this.city = data.name+","+ data.sys.country;

      })
  }

}
