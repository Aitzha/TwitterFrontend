import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { HomeComponent} from "./components/home/home.component";

//This is my case
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'post',
    component: PostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
