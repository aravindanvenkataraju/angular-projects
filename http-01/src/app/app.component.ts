import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";
import { Post } from "./post.model";
import { PostsService } from "./posts.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching = false;

  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    this.postsService.loadPosts();
  }

  onCreatePost(postData: Post) {
    this.postsService.createPost(postData);
  }

  onFetchPosts() {
    this.postsService.loadPosts();
  }

  onClearPosts() {
    // Send Http request
  }
}
