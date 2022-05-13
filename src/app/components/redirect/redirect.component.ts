import { RedirectService } from 'src/app/services/redirect.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { URL } from '../../models/task';
import { parseMetadata } from '@angular/localize/src/utils';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css'],
})
export class RedirectComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
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
          }, 1000)
        )
      ),
        (error) => {
          console.log(error);
        };
    });
  }
}
