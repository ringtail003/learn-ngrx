import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-a',
  template: `
<h2>pageA</h2>
<app-movies-page></app-movies-page>
`,
  styleUrls: []
})
export class PageAComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
