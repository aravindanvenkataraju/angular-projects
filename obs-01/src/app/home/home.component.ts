import { Component, OnDestroy, OnInit } from "@angular/core";
import { interval, Observable, Subscription } from "rxjs";

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
      }, 1000);
    });

    this.customObsSub = customObservable.subscribe((count) => {
      console.log("log from subscriber: ", count);
    });
  }
}
