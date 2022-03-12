import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
})
export class FeaturesComponent implements OnInit {
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
