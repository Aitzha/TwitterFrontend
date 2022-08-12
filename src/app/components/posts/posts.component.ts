import { Component, OnInit } from '@angular/core';
import { Post } from "./../../models/Post";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts!:Post[];

  constructor() { }

  ngOnInit(): void {
    this.posts = [
      {
        content: "First post",
        liked: false
      },
      {
        content: "Second post",
        liked: false
      }
    ]
  }

  toggleLike(id:number) {
    this.posts.map((v, i) => {
      if(i == id) v.liked = !v.liked;
      return v;
    })
  }

  deletePost(id:number) {
    this.posts = this.posts.filter((v, i) => i !== id);
  }

  addPost(inputPost:String) {
    this.posts.push({
      content: inputPost,
      liked: false
    });

    inputPost = "";
  }

}
