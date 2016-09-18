import '../../public/css/styles.css';

import {
  Component,
  HostListener,
  OnInit,
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/core';

// Router options for auth routes
import {
  // CanActivate,
  Router
  // ActivatedRouteSnapshot,
  // RouterStateSnapshot
} from '@angular/router';

// Custom Services
import { IpInfoService } from './srvcs/ip-info.service';

declare const $: any;
declare const Materialize: any;

@Component({
  animations: [
    trigger('navAnimation', [
      state('expanded', style({
        height: '210px'
      })),
      state('collapsed',   style({
        height: '74px'
      })),
      transition('expanded <=> collapsed', animate('300ms ease-out'))
    ])
  ],
  selector: 'my-app',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit { // tslint:disable-line

  public ipInfo: any;
  private navState: string;
  private title: string;

  constructor(private ipInfoService: IpInfoService, private router: Router) {
    this.title = 'My Outdoor Adventures';
    this.navState = 'expanded';
    this.ipInfo = {};
  }

  // Lifecycle Hooks
  ngOnInit() {
    console.log('AppComponent: ngOnInit'); // tslint:disable-line
    this.ipInfoService.getIpInfo()
      .then((ipInfo: any) => {
        this.ipInfo = ipInfo;
      })
      .catch((err: any) => {
        console.log(err); // tslint:disable-line
      });
  }

  // Event Listeners
  @HostListener('window:beforeunload', ['$event'])
  private onBeforeUnload(event: any) { // tslint:disable-line
    window.scrollTo(0, 0);
  }

  // @HostListener('document:keyup', ['$event'])
  // @HostListener('window:resize', ['$event'])
  @HostListener('window:scroll', ['$event'])
  private onScroll(event: any) { // tslint:disable-line
    if (event.currentTarget.scrollY === 0) {
      this.navState = 'expanded';
    } else {
      if (this.navState === 'expanded') {
        $('body').css('overflow', 'hidden');
        window.setTimeout(() => {
          $('body').css('overflow', 'initial');
        }, 300);
      }
      this.navState = 'collapsed';
    }
  }

  // Private Methods
}
