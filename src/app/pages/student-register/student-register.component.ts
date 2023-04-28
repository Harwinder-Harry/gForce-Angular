import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css'],
})
export class StudentRegisterComponent {
  constructor(private ds: DataService) {}

  activeForm = 1;
  fName = '';
  mName = '';
  lName = '';
  email = '';
  dob = '';
  pNumber = '';
  address = '';
  password = '';
  con_password = '';
  profile_img = '';
  file: any = '';

  fName2 = '';
  mName2 = '';
  lName2 = '';
  email2 = '';
  dob2 = '';
  pNumber2 = '';
  address2 = '';
  password2 = '';
  con_password2 = '';
  profile_img2 = '';
  file2: any = '';

  studentTabStatus: any = true;
  sTabValue = 50;
  pTabValue = 50;

  parentTabStatus: any = true;

  onChange(event: any) {
    this.file = event.target.files[0];
  }

  handleSubmit() {
    let data: any = new FormData();
    data.append('fName', this.fName);
    data.append('mName', this.mName);
    data.append('lName', this.lName);
    data.append('email', this.email);
    data.append('dob', this.dob);
    data.append('pNumber', this.pNumber);
    data.append('address', this.address);
    data.append('password', this.password);
    data.append('profile_img', this.file);
    data.append('type', this.activeForm);

    this.ds.signup(data).subscribe((res) => {
      console.log(res);
    });
  }

  handleSubmit2() {
    let data: any = new FormData();
    data.append('fName', this.fName2);
    data.append('mName', this.mName2);
    data.append('lName', this.lName2);
    data.append('email', this.email2);
    data.append('dob', this.dob2);
    data.append('pNumber', this.pNumber2);
    data.append('address', this.address2);
    data.append('password', this.password2);
    data.append('profile_img', this.profile_img2);
    data.append('type', this.activeForm);

    this.ds.signup(data).subscribe((res) => {
      console.log(res);
    });
  }

  studentTab(n: any) {
    this.studentTabStatus = !this.studentTabStatus;
    if (n == 2) {
      this.sTabValue = 100;
    } else {
      this.sTabValue = 50;
    }
  }

  parentTab(n: any) {
    this.parentTabStatus = !this.parentTabStatus;
    if (n == 2) {
      this.pTabValue = 100;
    } else {
      this.pTabValue = 50;
    }
  }

  changeActive(no: number) {
    this.activeForm = no;
  }
}
