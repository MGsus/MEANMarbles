import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "../user/user.service";
import { IUser } from "../../shared/interfaces/user.interface";

import "rxjs/add/operator/map";

@Injectable()
export class AuthService {
  loggedIn = false;
  isAdmin = false;

  currentUser: IUser = new IUser();

  constructor(private userService: UserService, private router: Router) {}

  login(nickname: any) {
    return this.userService.login(nickname).map(res => {
      this.setCurrentUser(res.nickname);
      return this.loggedIn;
    });
  }

  logout() {
    this.loggedIn = false;
    this.isAdmin = false;
    this.currentUser = new IUser();
    this.router.navigate(["/"]);
  }

  setCurrentUser(user: any) {
    this.loggedIn = true;
    this.currentUser._id = user._id;
    this.currentUser.nickname = user.nickname;
    this.currentUser.role = user.role;
    user.role === "admin"
      ? (this.isAdmin = true)
      : (this.isAdmin = false);
    delete user.role;
  }
}
