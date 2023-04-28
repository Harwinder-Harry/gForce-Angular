import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FounderComponent } from './pages/founder/founder.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { PerformingComponent } from './pages/performing/performing.component';
import { WorkshopComponent } from './pages/workshop/workshop.component';
import { LoginComponent } from './pages/login/login.component';
import { StudentRegisterComponent } from './pages/student-register/student-register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { InnerPageComponent } from './pages/inner-page/inner-page.component';
import { CartComponent } from './pages/cart/cart.component';
import { WorkshopViewComponent } from './pages/workshop-view/workshop-view.component';
import { SchoolComponent } from './pages/school/school.component';
import { SchoolInnerComponent } from './pages/school-inner/school-inner.component';
import { CareerComponent } from './pages/career/career.component';
import { BlogComponent } from './pages/blog/blog.component';
import { InnerBlogComponent } from './pages/inner-blog/inner-blog.component';
import { BookComponent } from './pages/book/book.component';
import { PaymentGComponent } from './pages/payment-g/payment-g.component';
import { PaymentDoneComponent } from './pages/payment-done/payment-done.component';
import { SClaessesComponent } from './pages/s-claesses/s-claesses.component';
import { SPaymentsComponent } from './pages/s-payments/s-payments.component';
import { SWorkshopComponent } from './pages/s-workshop/s-workshop.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'founder',
    component: FounderComponent,
  },
  {
    path: 'performing',
    component: PerformingComponent,
  },
  {
    path: 'workshop',
    component: WorkshopComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: StudentRegisterComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'innerView',
    component: InnerPageComponent,
  },
  {
    path: 'workshopView',
    component: WorkshopViewComponent,
  },
  {
    path: 'school',
    component: SchoolComponent,
  },
  {
    path: 'schoolView',
    component: SchoolInnerComponent,
  },
  {
    path: 'career',
    component: CareerComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'innerBlog/:id',
    component: InnerBlogComponent,
  },
  {
    path: 'book/:name/:id',
    component: BookComponent,
  },
  {
    path: 'paymenttest',
    component: PaymentGComponent,
  },
  {
    path: 'studentClasses',
    component: SClaessesComponent,
  },
  {
    path: 'studentPayments',
    component: SPaymentsComponent,
  },
  {
    path: 'studentWorkshop',
    component: SWorkshopComponent,
  },
  {
    path: 'paymentSuccess',
    component: PaymentDoneComponent,
  },
  {
    path: 'attendance',
    component: AttendanceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
