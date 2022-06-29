import { Component, OnInit } from '@angular/core';
import { URL } from 'src/app/models/task';
import { TaskService } from '../../services/task.service';
import { FormGroup } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
@Component({
  selector: 'app-deactivated-links',
  templateUrl: './deactivated-links.component.html',
  styleUrls: ['./deactivated-links.component.css'],
})
export class DeactivatedLinksComponent implements OnInit {
  urls: URL[];
  url: URL = new URL();
  pageOfItems: Array<any>;
  public fg: FormGroup;
  isCopied;
  loading = false;

  getDeactivatedLinks(): void {
    this.taskServer.getDeactivatedLinks().subscribe((url) => (this.urls = url));
  }

  reloadLinks(): void {
    this.getDeactivatedLinks();
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
  isReadMore = true;

  showText() {
    this.isReadMore = !this.isReadMore;
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

  startTime!: number;
  initTime!: number;
  contentInitTime!: number;
  viewInitTime!: number;

  printTime(time: number) {
    console.log(`Global loading ${time}ms`);
    console.log(`Global loading ${time / 1000}s`);
    console.log(`Component loading ${time - this.startTime}ms`);
    console.log(`Component loading ${(time - this.startTime) / 1000}s`);
    const loadTime = `Global loading ${time}ms`;
  }
  // Created

  // Initialized by angular

  // Rendered without children
  ngAfterContentInit() {
    this.contentInitTime = window.performance.now();
    this.printTime(this.contentInitTime);
  }
  // Rendered with children
  ngAfterViewInit() {
    this.viewInitTime = window.performance.now();
    this.printTime(this.viewInitTime);
  }

  constructor(private taskServer: TaskService, private toast: HotToastService) {
    this.startTime = window.performance.now();
    this.printTime(this.startTime);
  }

  ngOnInit() {
    this.getDeactivatedLinks();
    this.initTime = window.performance.now();
    this.printTime(this.initTime);
  }
}
