import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-b',
  template: `
<h2>pageB</h2>
<app-movies-page></app-movies-page>
`,
  styleUrls: []
})
export class PageBComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
