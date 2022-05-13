import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css'],
})
export class PagenotfoundComponent implements OnInit {
  constructor(private navigation: NavigationService) {}
  goBack(): void {
    this.navigation.back();
  }
  ngOnInit(): void {}
}
