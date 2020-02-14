import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { IUser } from "./user.interface";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  login(nickname: any): Observable<any> {
    return this.http.post("/users/login", nickname);
  }
  vote(user: IUser): Observable<IUser> {
    return this.http.post("/user/vote", user);
  }
}
