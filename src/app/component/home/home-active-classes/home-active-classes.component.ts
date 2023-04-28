import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-home-active-classes',
  templateUrl: './home-active-classes.component.html',
  styleUrls: ['./home-active-classes.component.css'],
})
export class HomeActiveClassesComponent {
  bgImg = '15815.png';

  constructor(private ds: DataService) {
    this.getEvents();
  }

  customOptions: OwlOptions = {
    loop: true,
    dots: false,
    autoplay: true,
    margin: 10,
    nav: true,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 2,
      },
      940: {
        items: 2,
      },
    },
  };

  classList: any = [
    // {
    //   id: 1,
    //   img: './assets/image/Group 15818.png',
    //   bgImg: './assets/image/Group15949.png',
    //   day: 'MAR.5 (sunday)',
    //   time: '3:00pm to 4:00pm',
    //   featureTxt: 'Featured Class',
    // },
    // {
    //   id: 2,
    //   img: './assets/image/Group 15818.png',
    //   bgImg: './assets/image/Group15949.png',
    //   day: 'MAR.5 (sunday)',
    //   time: '3:00pm to 4:00pm',
    //   featureTxt: 'Featured Class',
    // },
    // {
    //   id: 3,
    //   img: './assets/image/Group 15818.png',
    //   bgImg: './assets/image/Group15949.png',
    //   day: 'MAR.5 (sunday)',
    //   time: '3:00pm to 4:00pm',
    //   featureTxt: 'Featured Class',
    // },
  ];

  getEvents() {
    this.ds.getOpenClasses().subscribe((res: any) => {
      console.log(res);
      res.map((x: any) => {
        this.classList.push({
          id: x.id,
          img: './assets/image/Group 15818.png',
          title: x.page_title,
          bgImg: './assets/image/Group15949.png',
          day: new Date(x.scheduledate).toDateString(),
          time: x.scheduletime + ' PM',
          featureTxt: 'Featured Class',
        });
      });
    });
  }
}
