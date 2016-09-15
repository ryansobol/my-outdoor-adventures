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

  private title = 'My Outdoor Adventures'; // tslint:disable-line
  private navState: string = 'expanded';

  constructor(private router: Router) {}

  ngOnInit() {
    console.log('ngOnInit'); // tslint:disable-line
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

  // Lifecycle Hooks

  // Private Methods
}
