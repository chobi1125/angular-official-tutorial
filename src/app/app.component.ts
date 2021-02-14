import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <p [class]="styleClass">{{ today() }}</p>
  `,
  styles: [`
    h1 {
      color: #369;
      font-size: 150%;
    }
    .red {
      color: white;
      background-color: red;
    }
  `]
})
export class AppComponent implements OnInit {
  title: string;
  now: Date;
  styleClass: string;

  constructor() {
    setInterval(() => {
      this.now = new Date()
      // this.styleClass = this.styleClass == "red" ? "" : "red";
    }, 1000)
  }

  ngOnInit(){
    this.title = "Tour of Heroes";
    this.styleClass = "red"
  }

  today() {
    return this.now.toLocaleString(); 
    // toLocaleString()はいい具合に表示を整形してくれる。
    // ない場合：Sun Feb 14 2021 20:08:28 GMT+0900 (日本標準時)
    // ある場合：2021/2/14 20:08:41
  }
}
