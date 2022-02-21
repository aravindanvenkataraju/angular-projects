import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Subject, catchError, throwError } from "rxjs";
import { Post } from "./post.model";

@Injectable({
  providedIn: "root",
})
export class PostsService {
  error: Subject<string> = new Subject();
  constructor(private http: HttpClient) {}

  createPost(postData: Post) {
    this.http
      .post<{ name: string }>(
        "https://aravindans-first-project-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json",
        postData
      )
      .subscribe({
        next: (responseData) => {
          console.log(responseData);
        },
        error: (error) => {
          this.error.next(error.message);
        },
      });
  }

  loadPosts() {
    return this.http
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
        }),
        catchError((error) => {
          console.log(error);
          return throwError(() => {
            return error;
          });
        })
      );
  }

  deletePosts() {
    return this.http.delete(
      "https://aravindans-first-project-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json"
    );
  }
}
