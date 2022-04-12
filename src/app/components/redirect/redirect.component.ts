import { HttpClient, HttpResponse } from '@angular/common/http';
import { RedirectService } from 'src/app/services/redirect.service';
import { partitionArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { parseMetadata } from '@angular/localize/src/utils';
import { ActivatedRoute, Router } from '@angular/router';
import { URL } from '../../models/task';
import { Title } from '@angular/platform-browser';

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
  gatheredUrl: any;
  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.redirectService.getUrl(param.shortUrl).subscribe(
        (link) => (
          (this.gatheredUrl = link.longUrl),
          console.log(this.gatheredUrl),
          (this.urlLong = link.longUrl),
          setTimeout(() => {
            window.location.href = this.gatheredUrl;
          }, 1500)
        )
      ),
        (error) => {
          console.log(error);
        };
    });
  }
}
