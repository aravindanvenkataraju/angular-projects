import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  genders = ["male", "female"];
  signupForm: FormGroup;
  forbiddenUserNames: string[] = ["Chris", "Anna"];

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        this.forbiddenNames.bind(this),
      ]),
      email: new FormControl(
        null,
        [Validators.required, Validators.email],
        [this.forbiddenEmails.bind(this)]
      ),
      gender: new FormControl("male"),
      hobbies: new FormArray([]),
    });
  }
  submitForm() {
    console.log(this.signupForm);
  }
  addHobby() {
    const newControl = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get("hobbies")).push(newControl);
  }

  get hobbies() {
    return (this.signupForm.get("hobbies") as FormArray).controls;
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUserNames.indexOf(control.value) !== -1) {
      return { nameForbidden: true };
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const returnPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "test@test.com") {
          resolve({ emailForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return returnPromise;
  }
}
