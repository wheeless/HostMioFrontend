import { HttpClient, HttpResponse } from '@angular/common/http';
import { RedirectService } from 'src/app/services/redirect.service';
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
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private redirectService: RedirectService
  ) {}
  urls: URL = new URL();
  urlLong = '';
  // URL = 'https://api.hostmonkey.io/api/v1/links/';
  // domainCheck;
  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.redirectService.getTask(param.shortUrl).subscribe(
        (u) => ((this.urlLong = u.longUrl), (window.location.href = u.longUrl)),
        (error) => {
          console.log(error);
        }
      );
    });
  }
}
