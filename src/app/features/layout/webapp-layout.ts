import { Component } from "@angular/core";
import { Header } from "../webapp/shared/header/header";
import { RouterOutlet } from "@angular/router";
import { Footer } from "../webapp/shared/footer/footer";

@Component({
  selector: 'app-webapp-layout',
  imports: [Header, Footer, RouterOutlet],
  template: `
  <web-header />
  <router-outlet />
  <web-footer />
  `
})

export class WebappLayout {

}
