import { Component, ChangeDetectorRef } from "@angular/core";
import { UserService } from "./services/user/user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "pepitas";

  constructor(
    public user: UserService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngAfterViewChecked() {
    this.changeDetector.detectChanges();
  }
}
