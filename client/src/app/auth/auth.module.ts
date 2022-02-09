import { NgModule } from "@angular/core";

import { AuthRoutingModule } from "./auth-routing.module";

import { LoginComponent } from "./login/login.component";

@NgModule({
  imports: [
    AuthRoutingModule
  ],
  declarations: [
    LoginComponent
  ]
})

export class AuthModule {}