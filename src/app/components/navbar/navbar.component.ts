import { Component, OnInit } from '@angular/core';
import { PwaService } from 'src/app/services/pwa.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  title = 'HostMio';
  public isCollapsed = true;
  constructor(public Pwa: PwaService) {}
  installPwa(): void {
    this.Pwa.promptEvent.prompt();
  }
  ngOnInit(): void {}
}
