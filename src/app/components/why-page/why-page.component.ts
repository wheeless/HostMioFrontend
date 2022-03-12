import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-why-page',
  templateUrl: './why-page.component.html',
  styleUrls: ['./why-page.component.css'],
})
export class WhyPageComponent implements OnInit {
  constructor(private toast: HotToastService) {}

  ngOnInit(): void {
    this.toast.warning(
      'This page is still under construction, check back later!',
      {
        autoClose: true,
        dismissible: true,
        position: 'bottom-center',
      }
    );
  }
}
