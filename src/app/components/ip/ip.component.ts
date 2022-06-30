import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { HotToastService } from '@ngneat/hot-toast';
import { catchError, Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ip',
  templateUrl: './ip.component.html',
  styleUrls: ['./ip.component.css'],
})
export class IpComponent implements OnInit {
  myIp = '';
  ip = '';
  getIp() {
    return (
      this.http
        .get('https://api.avernix.com/ip')
        .subscribe((data) => (this.myIp = data['ip'])),
      console.log('test')
    );
  }

  constructor(
    private http: HttpClient,
    private toast: HotToastService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getIp();
  }
}
