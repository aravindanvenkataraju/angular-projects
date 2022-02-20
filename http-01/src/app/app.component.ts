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
  errorMessage = null;

  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    this.isFetching = true;
    this.errorMessage = null;
    this.postsService.loadPosts().subscribe({
      next: (posts) => {
        this.loadedPosts = posts;
        this.isFetching = false;
      },
      error: (error) => {
        console.log("error occured");
        this.errorMessage = error.message;
        this.isFetching = false;
      },
      complete: () => {
        console.log("completes");
      },
    });
  }

  onCreatePost(postData: Post) {
    this.postsService.createPost(postData);
  }

  onFetchPosts() {
    this.isFetching = true;
    this.errorMessage = null;
    this.postsService.loadPosts().subscribe({
      next: (posts) => {
        this.loadedPosts = posts;
        this.isFetching = false;
      },
      error: (error) => {
        console.log("error occured");
        this.errorMessage = error.message;
        this.isFetching = false;
      },
      complete: () => {
        console.log("completes");
      },
    });
  }

  onClearPosts() {
    this.postsService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }
}
