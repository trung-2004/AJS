import {Component, Input} from "@angular/core";

@Component({
  selector: 'teacher',
  templateUrl: './teacher.component.html'
})
export class TeacherComponent {
  @Input()
  schoolN?: string;

  nameTeacher = 'Nguyễn Văn A';
  soDienThoai = '0359080256';
  email = 'nguyenvana@gmail.com';
  address = 'Ninh Bình';

}
