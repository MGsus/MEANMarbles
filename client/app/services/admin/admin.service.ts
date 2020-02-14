import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { IPool } from "./pool.interface";

@Injectable()
export class AdminService {
  constructor(private http: HttpClient) {}

  login(nickname: any): Observable<any> {
    return this.http.post("/admin/login", nickname);
  }
  newPool(pool: IPool): Observable<IPool> {
    return this.http.post<IPool>("admin/newPool", pool);
  }
  showPool(pool: IPool): Observable<IPool> {
    return this.http.post<IPool>("admin/showPool", pool);
  }
}
