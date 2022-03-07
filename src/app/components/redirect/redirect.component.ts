import { partitionArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { parseMetadata } from '@angular/localize/src/utils';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css'],
})
export class RedirectComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  urlShort = '';
  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      setTimeout(() => {
        window.location.href =
          'https://api.hostmonkey.io/api/v1/links/' + param.shortUrl;
      }, 2000);
      this.urlShort = param.shortUrl;
    });
  }
}
