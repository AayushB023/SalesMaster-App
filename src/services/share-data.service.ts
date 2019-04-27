import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  private data = [];

  setOption(option, value) {
    // debugger;
    this.data = value;
    console.log(this.data);

  }
  getOption() {
    return this.data;
  }
}
