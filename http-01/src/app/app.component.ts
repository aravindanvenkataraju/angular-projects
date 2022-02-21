import { Component, OnDestroy, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, Subscription } from "rxjs";
import { Post } from "./post.model";
import { PostsService } from "./posts.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching = false;
  errorMessage = null;

  errorSubscription: Subscription;

  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    this.errorSubscription = this.postsService.error.subscribe((message) => {
      this.errorMessage = message;
    });
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

  ngOnDestroy(): void {
    this.errorSubscription.unsubscribe();
  }
}
