import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { PostTemplateComponent } from './templates/post/postTemplate.component';
import { ExperimentalDirective } from './templates/experimental.directive';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostTemplateComponent,
    ExperimentalDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
