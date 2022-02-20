import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";
import { Post } from "./post.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.onFetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.http
      .post<{ name: string }>(
        "https://aravindans-first-project-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json",
        postData
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
    console.log(postData);
  }

  onFetchPosts() {
    this.isFetching = true;
    this.http
      .get<{ [key: string]: Post }>(
        "https://aravindans-first-project-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json"
      )
      .pipe(
        map((responseData) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key))
              postsArray.push({ ...responseData[key], id: key });
          }
          return postsArray;
        })
      )
      .subscribe((posts) => {
        console.log(posts);
        this.loadedPosts = posts;
        this.isFetching = false;
      });
  }

  onClearPosts() {
    // Send Http request
  }
}
