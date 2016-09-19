// Angular Modules
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { BrowserModule }  from '@angular/platform-browser';

// Angular Material Modules
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdInputModule } from '@angular2-material/input';
import { MdToolbarModule } from '@angular2-material/toolbar';

// Angular 2 Bootstrap Modules
import { AlertModule, DatepickerModule } from 'ng2-bootstrap/ng2-bootstrap';
import { Ng2BootstrapModule } from 'ng2-bootstrap/ng2-bootstrap';

// The Router Config
import { routing } from './app.routing';

// 3rd Party Modules
import { MaterializeDirective } from "angular2-materialize";
import './rxjs-extensions';

// My Services
import { AuthService } from './srvcs/auth.service';
import { IpInfoService } from './srvcs/ip-info.service';

// Bootstrapped Routing Component
import { AppComponent } from './app.component';

// My Routed Components
import { AdventurerComponent } from './comps/adventurer/adventurer.component';
import { CampgroundComponent } from './comps/campground/campground.component';
import { LoginComponent } from './comps/login/login.component';
import { NewAdventureComponent } from
  './comps/new-adventure/new-adventure.component';
import { NotFoundComponent } from './comps/not-found/not-found.component';
import { RegisterComponent } from './comps/register/register.component';
import { SearchComponent } from './comps/search/search.component';
import { SettingsComponent } from './comps/settings/settings.component';

// My Non-Routed Components
import { SearchCampsComponent } from
  './comps/search-camps/search-camps.component';
import { SearchResultsComponent } from
  './comps/search-results/search-results.component';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    AdventurerComponent,
    CampgroundComponent,
    LoginComponent,
    MaterializeDirective,
    NewAdventureComponent,
    NotFoundComponent,
    RegisterComponent,
    SearchComponent,
    SearchCampsComponent,
    SearchResultsComponent,
    SettingsComponent
  ],
  imports: [
    AlertModule,
    BrowserModule,
    DatepickerModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdToolbarModule,
    Ng2BootstrapModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [
    AuthService,
    IpInfoService
  ],
})

export class AppModule { }
