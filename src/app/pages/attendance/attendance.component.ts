import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css'],
})
export class AttendanceComponent {
  constructor(private ds: DataService, private router: Router) {
    let isLogin: any = localStorage.getItem('isLogin');
    if (isLogin != null) {
      this.getProfile();
    } else {
      this.router.navigateByUrl('login');
    }
  }

  AllBookingsArr: any = [];

  getProfile() {
    let data: any = new FormData();
    let isLogin: any = localStorage.getItem('isLogin');
    let token = JSON.parse(isLogin).token;

    data.append('token', token);

    this.ds.getProfile(data).subscribe((res: any) => {
      if (res.length != 0) {
        this.getBookings(res[0].id);
      }
    });
  }

  getBookings(id: any) {
    this.ds.getAllBookings(id).subscribe((res: any) => {
      this.AllBookingsArr = res;
    });
  }
}
