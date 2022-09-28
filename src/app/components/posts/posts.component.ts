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

  fileToUpload: File | null = null;

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

  addPost(inputText:HTMLInputElement, inputUserId:HTMLInputElement, inputFile:HTMLInputElement) {
    // let img1: Blob = new Blob();
    // this.getFile().subscribe(data => {
    //   img1 = new Blob([data], {type: 'image/jpeg'});
    // });
    // let reader = new FileReader();
    // reader.readAsDataURL(img1);

    let newPost: PostModel = {
      ownerId: inputUserId.value,
      content: inputText.value,
      likesCount: 0,
      postedDate: new Date(),
      imageURL: "place holder"};

    if(inputFile.files != null) {
      this.fileToUpload = inputFile.files.item(0);
    }

    this.postPosts(inputText.value, inputUserId.value);
  }

  getPosts(): Observable<any>{
    // return this.httpClient.get("https://sleepy-crag-50454.herokuapp.com/post", {responseType: "json", observe: "body"});
    return this.httpClient.get("http://localhost:8080/post", {responseType: "json", observe: "body"});
  }

  postPosts(text:string, userId:string){
    let testData:FormData = new FormData();
    if(this.fileToUpload != null) {
      testData.append('image', this.fileToUpload);
    }

    this.httpClient.post("http://localhost:8080/post" + "?text=" + text + "&fakeOwnerId=" + userId,
                                testData);

    this.posts = [];

    this.getPosts().subscribe(data => {
      for(let i = 0; i < data.length; i++) {
        let newPost: PostModel = {ownerId: "temp", content: "something", likesCount: 0, postedDate: new Date, imageURL: "no image"};
        console.log(data[i]);
        Object.assign(newPost, data[i]);
        this.posts.push(newPost);
      }
    })
  }
}
