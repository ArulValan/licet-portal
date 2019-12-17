import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent {
  private isAdmin: boolean;
  constructor(private router: Router, private userService: UserService) {
    this.isAdmin = userService.user.admin;
  }
}
