import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  // baseurl = 'http://localhost/harman/GForce/backend_live/';
  // frontendurl = 'http://localhost:4200';

  baseurl = 'https://gforce.techiespreview.website/admin/';
  frontendurl = 'https://gforce.techiespreview.website';

  signup(data: any) {
    return this.http.post(this.baseurl + 'api/signup', data);
  }

  signin(data: any) {
    return this.http.post(this.baseurl + 'api/signin', data);
  }

  getBranch() {
    return this.http.get(this.baseurl + 'api/getBranch');
  }

  getClasses() {
    return this.http.get(this.baseurl + 'api/getClasses');
  }

  getWorkShopByBranch(data: any) {
    return this.http.post(this.baseurl + 'api/getWorkShopByBranch', data);
  }
  getBlogs() {
    return this.http.get(this.baseurl + 'api/getBlogs');
  }

  getBlogsCat() {
    return this.http.get(this.baseurl + 'api/getBlogsCat');
  }

  getWorkShop() {
    return this.http.get(this.baseurl + 'api/getWorkshops');
  }

  getProfile(data: any) {
    return this.http.post(this.baseurl + 'api/getProfile', data);
  }

  handlePayment(data: any) {
    return this.http.post(this.baseurl + 'paymenttest/axios.php', data);
  }
  savePaymentId(data: any) {
    return this.http.post(this.baseurl + 'api/savePayment', data);
  }

  getWorkShopSingle(data: any) {
    return this.http.post(this.baseurl + 'api/getWorkShopSingle', data);
  }
  getBlogbyId(id: any) {
    return this.http.get(this.baseurl + 'api/getSingleBlogs/' + id);
  }

  getAllBookings(id: any) {
    return this.http.get(this.baseurl + `api/getAllBookings/${id}`);
  }
}
