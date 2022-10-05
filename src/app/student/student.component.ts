import {Component, Input} from "@angular/core";

@Component({
  selector: 'student',
  templateUrl: './student.component.html'
})
export class StudentComponent {
  @Input()
  classN?: string;


  soBanGai = 0;

  tangSoBanGai(){
    this.soBanGai++;

  }
  giamSoBanGai(){
    if(this.soBanGai > 0 ){
      this.soBanGai--;
    }
  }
}
