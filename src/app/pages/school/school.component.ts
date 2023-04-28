import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css'],
})
export class SchoolComponent {
  constructor(public ds: DataService) {
    this.getBranch();
  }

  allbranch: any = [];

  customOptions: OwlOptions = {
    loop: false,
    dots: false,
    autoplay: true,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
  };

  getBranch() {
    this.ds.getBranch().subscribe((result: any) => {
      console.log(result);
      this.allbranch = result;
    });
  }
}
