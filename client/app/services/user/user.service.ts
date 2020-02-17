import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { IUser } from "../../shared/interfaces/user.interface";

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  login(nickname: any): Observable<any> {
    console.log(nickname);

    return this.http.post("user/login", nickname);
  }
  vote(user: IUser): Observable<IUser> {
    return this.http.post<IUser>("user/vote", user);
  }
}
