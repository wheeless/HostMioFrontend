import { Component, Input, OnInit } from '@angular/core';
import { NumberLiteralType } from 'typescript';
import { HotToastService } from '@ngneat/hot-toast';
@Component({
  selector: 'app-link-card',
  templateUrl: './link-card.component.html',
  styleUrls: ['./link-card.component.css'],
})
export class LinkCardComponent implements OnInit {
  @Input() clicks: number;
  @Input() shortUrl: string;
  @Input() longUrl: string;
  constructor(private toast: HotToastService) {}

  isReadMore = true;

  showText() {
    this.isReadMore = !this.isReadMore;
  }
  successToast(message) {
    this.toast.success(message, {
      autoClose: true,
      dismissible: true,
      position: 'bottom-center',
    });
  }
  infoToast(message) {
    this.toast.info(message, {
      autoClose: true,
      dismissible: true,
      position: 'bottom-center',
    });
  }
  failToast(message) {
    this.toast.error(message, {
      autoClose: true,
      dismissible: true,
      position: 'bottom-center',
    });
  }
  warnToast(message) {
    this.toast.warning(message, {
      autoClose: true,
      dismissible: true,
      position: 'bottom-center',
    });
  }
  ngOnInit(): void {}
}
