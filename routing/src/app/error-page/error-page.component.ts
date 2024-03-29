import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-error-page",
  templateUrl: "./error-page.component.html",
  styleUrls: ["./error-page.component.css"],
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string = "error not provided!";
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    //subsribe to the active routes' data:
    this.route.data.subscribe((data: {}) => {
      this.errorMessage = data["message"];
    });
  }
}
