import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {ApiService} from '../../../services';

import {ProductDetailModel} from '../../../models';

@Component({
  selector: 'app-sell-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Output() onAddProduct = new EventEmitter<any>();

  products: ProductDetailModel[] = [];
  isLoading: boolean = false;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.isLoading = true;
    this.apiService.get(`${this.apiService.apiUrl}/sell-goods/product-list/`).subscribe((data) => {
      this.products = data;
      this.isLoading = false;
    }, () => {
      this.isLoading = false;
    });
  }

  addProduct(product) {
    this.onAddProduct.emit(product);
  }

}
