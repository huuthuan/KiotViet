import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Subscription} from 'rxjs';

import {UserService} from '../../services';
import {LoggedUser} from '../../models';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  @Output() onSidebarToggle: EventEmitter<any> = new EventEmitter();
  userSubscription: Subscription;
  user: LoggedUser = new LoggedUser();
  isOpenMenuProduct: boolean = false;
  isProductItem: boolean = true;
  isReportItem:boolean = true;
  isExchangeItem:boolean = true;

  constructor(private userService: UserService) {
  }


  ngOnInit() {
    this.userSubscription = this.userService.currentUser.subscribe((user) => {
      console.log(user);
      this.user = user;
    });
  }

  toggleMinimize() {
    this.onSidebarToggle.emit();
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  onToggleMenuProduct() {
    this.isOpenMenuProduct = !this.isOpenMenuProduct;
  }

  onShowProductItem() {
    this.isProductItem = !this.isProductItem;
  }

  onShowReportItem() {
    this.isReportItem = !this.isReportItem;
  }

  onShowExchangeItem() {
    this.isExchangeItem = !this.isExchangeItem;
  }
}
