import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

// URLをブラウザのアドレスバーに貼り付けたときに、 どのビューを表示したらよいかを設定
const routes: Routes = [
  // path：ブラウザのアドレスバーにある URL にマッチする文字列
  // component：そのルートに遷移するときにルーターが作成すべきコンポーネント
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  // パラメータ付ルート
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
];

// @NgModuleメタデータはルーターを初期化し、ブラウザのロケーションの変更を待機
@NgModule({
  // ルートを設定することでルーターに向かう場所を教る
  imports: [RouterModule.forRoot(routes)],
  //  RouterModule をエクスポートし、アプリ全体で利用できるように。
  exports: [RouterModule]
})
export class AppRoutingModule { }
