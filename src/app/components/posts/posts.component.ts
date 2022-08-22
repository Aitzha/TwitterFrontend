import { Component, OnInit } from '@angular/core';
import { Post } from "./../../models/Post";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts!:Post[];

  public test:boolean = false;
  public curStatus:number = 404;
  totalAngularPackages!:BigInteger;
  public message:string = "nothing";

  constructor(private http: HttpClient) { }

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

    // this.http.get('http://3.71.28.250:8080/hello',{responseType:'text', observe: 'response'}).pipe(map(data => {
    //   console.log("Here will be return response code Ex :200", data.status);
    //   this.curStatus = data.status;
    // }));
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

  getHello() {

    // return this.http.get('http://localhost:8080/hello',{}).subscribe(data => {
    //   console.log("Here will be return response code Ex :200", data)
    //   this.message = data;
    // });

    return this.http.get('http://localhost:8080/hello',
      {headers: new HttpHeaders('Access-Control-Allow-Origin'), responseType: "text", observe: "response"})
      .subscribe(data => {this.message = data.statusText;});

  }
}
