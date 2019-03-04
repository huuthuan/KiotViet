import {Component, HostBinding, OnInit} from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @HostBinding('class.minimized') navMinimized: boolean = window.innerWidth < 992;

  constructor() {
  }

  ngOnInit() {

  }

  onSidebarToggle() {
    this.navMinimized = !this.navMinimized;
    window.dispatchEvent(new Event('resize'));
    //
    // Trigger resize event
    setTimeout(() => {
    }, 100);
  }
}
