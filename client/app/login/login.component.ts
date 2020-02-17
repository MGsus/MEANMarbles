import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";

import { Router } from "@angular/router";
import { AuthService } from "../services/auth/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  nickname = new FormControl("", [
    Validators.required,
    Validators.pattern("[a-zA-Z ]*")
  ]);
  code = new FormControl("", [Validators.required]);

  constructor(
    private auth: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    if (this.auth.loggedIn) this.router.navigate(["/"]);
    this.loginForm = this.formBuilder.group({
      nickname: this.nickname,
      code: this.code
    });
  }

  login() {
    this.auth.login(this.loginForm.value).subscribe(
      (res: any) => {
        console.log(res);
        this.router.navigate(["/"]);
      },
      (err: any) => console.log(err)
    );
  }
}
