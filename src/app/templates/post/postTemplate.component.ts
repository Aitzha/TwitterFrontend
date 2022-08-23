import { Component, OnInit } from '@angular/core';
import { PostModel } from './../../models/PostModel'
import { PostsComponent} from "../../components/posts/posts.component";

@Component({
  selector: 'app-postTemplate',
  templateUrl: './postTemplate.component.html',
  styleUrls: ['./postTemplate.component.css'],
  inputs: ['info']
})

export class PostTemplateComponent implements OnInit {
  info: any;

  constructor() { }

  ngOnInit(): void {
  }

  function() {
    return {
      restrict: 'E',
      scope: {
        info: '='
      },
      templateUrl: 'js/directives/appInfo.html'
    }
  };
}
//
// directive('appInfo', function() {
//   return {
//     restrict: 'E',
//     scope: {
//       info: '='
//     },
//     templateUrl: 'js/directives/appInfo.html'
//   };
// });
