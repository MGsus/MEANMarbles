import { Component, Input } from "@angular/core";

@Component({
  selector: "app-msg",
  templateUrl: "./msg.component.html",
  styleUrls: ["./msg.component.scss"]
})
export class MsgComponent {
  @Input() message = { body: "", type: "" };

  setMessage(body: any, type: any, time = 3000) {
    this.message.body = body;
    this.message.type = type;
    setTimeout(() => (this.message.body = ""), time);
  }
}
