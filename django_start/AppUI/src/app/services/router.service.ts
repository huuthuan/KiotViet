import {Injectable} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, map, switchMap} from 'rxjs/operators';
import {Title} from '@angular/platform-browser';
import {BehaviorSubject, Observable} from 'rxjs';

const APP_NAME = '';

@Injectable()
export class RouterService {
  public _pageTitle: BehaviorSubject<string> = new BehaviorSubject('');
  public _routerData: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private titleService: Title) {
  }

  setPageTitle(value: string) {
    this._pageTitle.next(value);
  }

  get currentPageTitle(): Observable<string> {
    return this._pageTitle.asObservable();
  }

  setRouterData(value: any) {
    this._routerData.next(value);
  }

  get routerData(): Observable<any> {
    return this._routerData.asObservable();
  }

  initRouterData() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(() => {
        let route = this.activatedRoute;
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      switchMap(route => route.data),
      map((data: any) => {
        if (data.hasOwnProperty('title') && data.title) {
          return data;
        } else {
          // If not, we do a little magic on the url to create an approximation
          // return this.router.url.split('/').reduce((acc, frag) => {
          // 	data.title = this.ucFirst(frag);
          // 	return data;
          // });
          data.title = APP_NAME;
          return data;
        }
      })
    ).subscribe((data: any) => {
      this.setRouterData(data);
      this.setPageTitle(data.title);
      if (data.title !== APP_NAME) {
        if (APP_NAME) {
          this.titleService.setTitle(`${data.title} - ${APP_NAME}`);
        } else {
          this.titleService.setTitle(`${data.title}`);
        }
      } else {
        this.titleService.setTitle(`${APP_NAME}`);
      }
    });
  }

  private ucFirst(string) {
    if (!string) {
      return string;
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
