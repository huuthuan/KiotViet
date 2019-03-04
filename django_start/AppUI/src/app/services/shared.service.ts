import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';


@Injectable()
export class SharedService {
  public _popupOpened: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {

  }

  setPopupOpen(value: boolean) {
    this._popupOpened.next(value);
  }

  get hasPopupOpened(): Observable<boolean> {
    return this._popupOpened.asObservable();
  }
}
