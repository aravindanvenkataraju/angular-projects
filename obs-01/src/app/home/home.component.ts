import { Component, OnDestroy, OnInit } from "@angular/core";
import {
  filter,
  interval,
  map,
  Observable,
  Subscriber,
  Subscription,
} from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, OnDestroy {
  // private firstSub: Subscription;
  private customObsSub: Subscription;
  constructor() {}
  ngOnDestroy(): void {
    //this.firstSub.unsubscribe();
    this.customObsSub.unsubscribe();
    console.log("un-subscribed");
  }

  ngOnInit() {
    // this.firstSub = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });

    const customObservable = new Observable((subsrciber) => {
      let count = 0;
      setInterval(() => {
        subsrciber.next(count++);
        if (count > 20) {
          subsrciber.error(new Error("Observable hit an error!"));
        }
        if (count > 10) {
          subsrciber.complete();
        }
      }, 1000);
    });

    const pipedObservable = customObservable.pipe(
      filter((data: number) => data % 2 == 0),
      map((data, index) => {
        return "observable returned " + data + " at index " + index;
      })
    );

    this.customObsSub = pipedObservable.subscribe({
      next: (data) => {
        console.log("log from subscriber: ", data);
      },
      error: (error) => {
        alert("error occured: " + error.message);
      },
      complete: () => {
        console.log("observable work is complete");
      },
    });
  }
}
