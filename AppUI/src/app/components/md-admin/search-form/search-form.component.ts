import {Component, OnInit, Output,Input, EventEmitter, ViewChild} from '@angular/core';

import {DxTreeViewComponent} from 'devextreme-angular';
import {ApiService} from '../../../services';
import {CategoryLookupModel, SearchFilterModel, SearchOptions} from '../../../models';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  @Output() onSuccess = new EventEmitter();
  @Output() onCancel = new EventEmitter();
  @ViewChild(DxTreeViewComponent) treeView;
  @Output() onFilter = new EventEmitter();
  @Input() search_options: SearchOptions = new SearchOptions();
  categorys: CategoryLookupModel[];
  selectedCategory: CategoryLookupModel;
  searchFilter: SearchFilterModel = new SearchFilterModel();
  isProductCategory: boolean = false;
  insurancePopupTitle = '';
  isCategoryPopup: boolean = false;
  isLoading: boolean = false;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.loadCategory();
  }

  loadCategory() {
    this.isLoading = true;
    this.apiService.get(`${this.apiService.apiUrl}/product/lookup/categories`).subscribe((data) => {
      data.push({id: 0, name: 'All', parentId: null});
      this.categorys = data;
      this.isLoading = false;
    });
  }

  onAddCategory() {
    this.selectedCategory = new CategoryLookupModel();
    this.insurancePopupTitle = 'Add New Category';
    this.isCategoryPopup = true;
  }

  onEditCategory(category) {
    if (!category) {
      return;
    }
    this.selectedCategory = category;
    this.insurancePopupTitle = 'Edit New Category';
    this.isCategoryPopup = true;
  }

  onCategorySuccess() {
    this.loadCategory();
    this.onCancelCategory();
  }

  onCancelCategory() {
    this.isCategoryPopup = false;
    this.loadCategory();
  }

  // onCancelClick() {
  //   this.onCancel.emit();
  // }

  showProductCategory() {
    this.isProductCategory = !this.isProductCategory;
  }

  onEnterKey(e) {
    this.onFilter.emit(this.searchFilter);
  }

  emitFilterChangesProductCategory(data) {
    this.searchFilter.categoryName = data.name;
    this.onFilter.emit(this.searchFilter);
  }

}
