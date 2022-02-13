import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  defaultQuestion: string = "teacher";
  suggestUserName() {
    const suggestedName = "Superuser";
  }

  onSubmit(userform: NgForm) {
    console.log("form submitted", userform);
  }
}
