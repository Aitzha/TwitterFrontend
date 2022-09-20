import {Component, OnInit} from '@angular/core';
import {PostModel} from "../../models/PostModel";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {observable, Observable} from "rxjs";
// import {Http} from "aws-sdk/clients/xray";
// import * as AWS from 'aws-sdk';
// import * as fs from 'fs';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  tempPosts!:PostModel[];
  posts:PostModel[] = [];

  public test:boolean = false;
  public curStatus:number = 404;
  totalAngularPackages!:BigInteger;
  public message:string = "nothing";

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    //Temporary posts
    // let img1: Blob = new Blob();
    // this.getFile().subscribe(data => {
    //   img1 = new Blob([data], {type: 'image/jpeg'});
    // });
    // let reader = new FileReader();
    // reader.readAsDataURL(img1);

    // fs.readFileSync('image.jpeg','utf8');

    // if (img1.size == 0) {
    //   console.log("No image");
    // } else {
    //   console.log("There is image ");
    //   console.log(img1.size);
    // }



    // this.getPosts().subscribe(data => {
    //   for(let i = 0; i < data.length; i++) {
    //     this.posts.push(data[i]);
    //   }
    // });



    // this.getPosts().subscribe(data => {
    //   let result = JSON.stringify(data);
    //   this.tempPosts = JSON.parse(result);
    //   console.log(this.tempPosts);
    //   for(let i = 0; i < this.tempPosts.length; i++) {
    //     // console.log(typeof(data[i].likesCount));
    //     this.posts.push(this.tempPosts[i]);
    //   }
    // })

    this.getPosts().subscribe(data => {
      for(let i = 0; i < data.length; i++) {
        let newPost: PostModel = {ownerId: "temp", content: "something", likesCount: 0, postedDate: new Date, imageURL: "no image"};
        console.log(data[i]);
        Object.assign(newPost, data[i]);
        this.posts.push(newPost);
      }
    })



    // this.http.get('http://3.71.28.250:8080/hello',{responseType:'text', observe: 'response'}).pipe(map(data => {
    //   console.log("Here will be return response code Ex :200", data.status);
    //   this.curStatus = data.status;
    // }));
  }

  toggleLike(id:number) {
    // this.posts.map((v, i) => {
    //
    //   if(i == id) {
    //     v.liked = !v.liked;
    //     if(v.liked) v.likesCount += 1;
    //     if(!v.liked) v.likesCount -= 1;
    //   }
    //
    //   return v;
    // })
  }

  deletePost(id:number) {
    this.posts = this.posts.filter((v, i) => i !== id);
  }

  addPost(inputPost:HTMLInputElement) {
    // let img1: Blob = new Blob();
    // this.getFile().subscribe(data => {
    //   img1 = new Blob([data], {type: 'image/jpeg'});
    // });
    // let reader = new FileReader();
    // reader.readAsDataURL(img1);

    let newPost: PostModel = {
      ownerId: "localhost",
      content: inputPost.value,
      likesCount: 0,
      postedDate: new Date(),
      imageURL: "place holder"}

    this.posts.push(newPost);
  }

  getPosts(): Observable<any>{
    return this.httpClient.get("http://3.120.34.233:8080/post", {responseType: "json", observe: "body"});
  }

  getHello() {

    // return this.http.get('http://localhost:8080/hello',{}).subscribe(data => {
    //   console.log("Here will be return response code Ex :200", data)
    //   this.message = data;
    // });

    // return this.http.get('http://localhost:8080/hello',
    //   {headers: new HttpHeaders('Access-Control-Allow-Origin'), responseType: "text", observe: "response"})
    //   .subscribe(data => {this.message = data.statusText;});

  }
  //
  // getFile() {
  //   return this.http.get('http://localhost:8080/test/image',
  //     {headers: new HttpHeaders('Access-Control-Allow-Origin'), responseType: "blob", observe: "response"})
  //     .subscribe(data => {this.posts[0].image = data.body;});
  // }

  // public getFile(): Observable<any>{
  //   //   return this.http.get('https://twitter-bucket-2708.s3.eu-central-1.amazonaws.com/test.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220904T111051Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=AKIAYESCOPVACYRDXEFP%2F20220904%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=6b47b34d8283bcb393eb60e69a9c51ce54323fa32e270261c510539035f28495', {responseType: "blob"});
  //   // return this.httpClient.get("https://twitter-bucket-2708.s3.eu-central-1.amazonaws.com/test.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220904T122344Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=AKIAYESCOPVACYRDXEFP%2F20220904%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=4293ee522915290cd211eef17de74ae870116a23e47c7a029eeffc2a3c4de1f5", {responseType: "blob"});
  //   return this.httpClient.get("https://twitter-bucket-2708.s3.eu-central-1.amazonaws.com/test.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220905T061001Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=AKIAYESCOPVACYRDXEFP%2F20220905%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=3005ed0e6f9c4f10a3e244563fd6a3ac3f8b8249b066031ea2248908bdb133da", {headers: new HttpHeaders()});
  // }

  // public getImage(): Observable<any> {
  //   return this.http.get('http://localhost:8080/test/image', {responseType: "blob"});
  // }
}
