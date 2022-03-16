import { HttpClient, HttpResponse } from '@angular/common/http';
import { partitionArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { parseMetadata } from '@angular/localize/src/utils';
import { ActivatedRoute, Router } from '@angular/router';
import { URL } from '../../models/task';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css'],
})
export class RedirectComponent implements OnInit {
  constructor(private route: ActivatedRoute, private http: HttpClient) {}
  urlShort = '';
  URL = 'https://api.hostmonkey.io/api/v1/links/';
  // domainCheck;
  ngOnInit(): void {
    // this.http
    //   .head(
    //     'https://api.hostmonkey.io/api/v1/links/' +
    //       this.route.snapshot.params.shortUrl,
    //     {
    //       observe: 'response',
    //     }
    //   )
    //   .subscribe((response) => {
    //     console.log(response.status);
    //     if (response.status === 200) {
    //       window.location.href =
    //         'https://api.hostmonkey.io/api/v1/links/' +
    //         this.route.snapshot.params.shortUrl;
    //     } else {
    //       window.location.href = 'https://www.hostm.io/404';
    //     }
    //     // this.domainCheck = data.domain;
    //   });

    this.route.params.subscribe((param) => {
      // this.domainCheck =
      //   'https://api.hostmonkey.io/api/v1/links/' + param.shortUrl;
      // if (this.domainCheck === (this.statusCode === NotFound)) {
      // } else {
      // }
      window.location.href =
        'https://api.hostmonkey.io/api/v1/links/' + param.shortUrl;
      // setTimeout(() => {
      //   window.location.href =
      //     'https://api.hostmonkey.io/api/v1/links/' + param.shortUrl;
      // }, 0);
      this.urlShort = param.shortUrl;
    });
  }
}
