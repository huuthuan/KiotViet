import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {map, catchError} from 'rxjs/operators';
import {isArray} from 'lodash';

import {environment} from '../../environments/environment';
import {UserService} from './user.service';
import {Utils} from '../utils/utilities';


@Injectable()
export class ApiService {
  private baseURL = environment.apiUrl;

  constructor(private http: HttpClient, private userService: UserService) {
  }

  get apiUrl() {
    return this.baseURL;
  }

  get headers(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  get options(): any {
    return {
      headers: this.headers
    };
  }

  fixUrl(url: string) {
    return url.replace(/\/?(\?|#|$)/, '/$1');
  }

  get(url: string): Observable<any> {
    return this.http
      .get(`${this.fixUrl(url)}`, this.options)
      .pipe(map(this.extractData), catchError(this.handleError.bind(this)));
  }

  getWithDynamicQueryTerm(url: string, key: string, val: string): Observable<any> {
    return this.http
      .get(`${this.fixUrl(url)}?${key}=${val}`, this.options)
      .pipe(map(this.extractData), catchError(this.handleError.bind(this)));
  }

  getWithFixedQueryString(url: string, param: any): Observable<any> {
    const params = new HttpParams().append('query', param);
    const options = {headers: this.headers, params: params};
    return this.http
      .get(`${this.fixUrl(url)}`, options)
      .pipe(map(this.extractData), catchError(this.handleError.bind(this)));
  }

  getWithObjectAsQueryString(url: string, param: any): Observable<any> {
    const params: HttpParams = new HttpParams();
    for (const key in param) {
      if (param.hasOwnProperty(key)) {
        const val = param[key];
        params.set(key, val);
      }
    }
    const options = {headers: this.headers, params: params};
    return this.http
      .get(`${this.fixUrl(url)}`, options)
      .pipe(map(this.extractData), catchError(this.handleError.bind(this)));
  }

  post(url: string, param: any): Observable<any> {
    const body = JSON.stringify(param);
    return this.http
      .post(`${this.fixUrl(url)}`, body, this.options)
      .pipe(map(this.extractData), catchError(this.handleError.bind(this)));
  }

  update(url: string, param: any): Observable<any> {
    const body = JSON.stringify(param);
    return this.http
      .put(`${this.fixUrl(url)}`, body, this.options)
      .pipe(map(this.extractData), catchError(this.handleError.bind(this)));
  }

  patch(url: string, param: any): Observable<any> {
    const body = JSON.stringify(param);
    return this.http
      .patch(`${this.fixUrl(url)}`, body, this.options)
      .pipe(map(this.extractData), catchError(this.handleError.bind(this)));
  }

  delete(url: string, param?: any): Observable<any> {
    const params: HttpParams = new HttpParams();
    for (const key in param) {
      if (param.hasOwnProperty(key)) {
        const val = param[key];
        params.set(key, val);
      }
    }
    const options = {headers: this.headers, params: params};
    return this.http
      .delete(`${this.fixUrl(url)}`, options)
      .pipe(map(this.extractData), catchError(this.handleError.bind(this)));
  }

  deleteWithKey(url: string, key: string, val: string): Observable<any> {
    return this.http
      .delete(`${this.fixUrl(url)}?${key}=${val}`, this.options)
      .pipe(map(this.extractData), catchError(this.handleError.bind(this)));
  }

  private extractData(res: Response) {
    return res || {};
  }

  private handleError(data: any) {
    let errMsg = '';
    let errKey = '';
    // Force to login page if Unauthorized error
    if (data.status === 401 || data.statusText === 'Unauthorized') {
      Utils.notifyError('Signature has expired.');
      this.userService.logout();
    }

    if (Object.keys(data.error).length) {
      errKey = Object.keys(data.error)[0];
      errMsg = data.error[errKey];
      if (isArray(errMsg)) {
        errMsg = errMsg[0];
      }
    }
    return throwError({error_key: errKey, message: errMsg, messages: data.error, data: data});
  }
}
