import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { AdminComponent } from "./admin/admin.component";
import { UserService } from "./services/user/user.service";
import { AdminService } from "./services/admin/admin.service";
import { AuthService } from "./services/auth/auth.service";
import { MsgComponent } from "./shared/msg/msg.component";

@NgModule({
  declarations: [AppComponent, LoginComponent, AdminComponent, MsgComponent],
  imports: [SharedModule, AppRoutingModule],
  providers: [UserService, AdminService, AuthService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {}
