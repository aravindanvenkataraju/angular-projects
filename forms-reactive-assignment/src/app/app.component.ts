import { Component } from "@angular/core";
import {
  EmailValidator,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  projectForm: FormGroup = new FormGroup({
    projectname: new FormControl(
      null,
      [
        Validators.required,
        //this.projectNameInvalid.bind(this), //synchronous validation
      ],
      [this.asyncProjectNameInvalid.bind(this)] //asynchronous validation
    ),
    email: new FormControl(null, [Validators.required, Validators.email]),
    projectstatus: new FormControl("-1"),
  });
  projectStatus: string[] = ["Stable", "Critical", "Finished"];

  submitForm() {
    console.log(this.projectForm.value);
  }

  projectNameInvalid(control: FormControl): { [s: string]: boolean } {
    if (control.value === "Test") {
      return { projectNameInvalid: true };
    }
    return null;
  }

  asyncProjectNameInvalid(
    control: FormControl
  ): Promise<any> | Observable<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "Test") {
          resolve({ projectNameInvalid: true });
        }
        resolve(null);
      }, 2000);
    });
  }
}
