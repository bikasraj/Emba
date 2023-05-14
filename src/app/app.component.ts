import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Emba';
  constructor(private route: Router) {}
  setHeader() {
    let path = this.route.url.split('/')[1];
    this.title = decodeURIComponent(path);
  }
  navs = [
    {url: "", content: "Home"},
    {url: "about", content: "About"},
    {url: "blog", content: "Blog"}
];
}
