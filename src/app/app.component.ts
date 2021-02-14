import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <p [class]="styleClass">{{ today() }}</p>
    <p>{{ message }}</p>
    <button (click)="doClick()">Click</button>
    <div>
      <p>input:{{input}}</p>
      <input type="text" #field (keyup)="doType(field.value)" />
    </div>
    <!-- ngModel -->
    <div>
      <p>ngModel:{{ngModelText}}</p>
      <input type="text" [(ngModel)]="ngModelText" />
      <!-- テンプレート側で主導して値のバインディングを行ってくれる。 -->
    </div>
    <!-- formControl -->
    <div>
      <p>formControl:{{myControl.value}}</p>
      <input type="text" [formControl]="myControl" />
      <!-- テンプレート側で主導して値のバインディングを行ってくれる。 -->
    </div>
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
  message: string;
  now: Date;
  styleClass: string;
  count: number;
  input: string;
  ngModelText: string;
  myControl: FormControl;

  constructor() {
    setInterval(() => {
      this.now = new Date()
      // this.styleClass = this.styleClass == "red" ? "" : "red";
    }, 1000)
  }

  ngOnInit(){
    this.title = "Tour of Heroes";
    this.styleClass = "red"
    this.message = "クリックしてください！"
    this.count = 0;
    this.myControl = new FormControl("ok.");
  }

  today() {
    return new Date().toLocaleString();
    // 上記でもテンプレート側で更新を確認できることからコンポーネント全体がレンダリングされてるのがわかる🤔
    // return this.now.toLocaleString();
    // toLocaleString()はいい具合に表示を整形してくれる。
    // ない場合：Sun Feb 14 2021 20:08:28 GMT+0900 (日本標準時)
    // ある場合：2021/2/14 20:08:41
  }

  doClick() {
    this.message = ++this.count + "回クリック！！"
  }

  doType(val: string) {
    this.input = val;
  }
}
