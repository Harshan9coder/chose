import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { TagComponent } from './tag/tag.component';
import { QuotesComponent } from './quotes/quotes.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { importType } from '@angular/compiler/src/output/output_ast';
import { HomeComponent } from './home/home.component';
import { HeaderReuseComponent } from './header-reuse/header-reuse.component';
import { SideNavReuseComponent } from './side-nav-reuse/side-nav-reuse.component';
import { UsersComponent } from './users/users.component';
import { DemoComponent } from './demo/demo.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TagComponent,
    QuotesComponent,
    EditprofileComponent,
    HomeComponent,
    HeaderReuseComponent,
    SideNavReuseComponent,
    UsersComponent,
    DemoComponent,
    
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },

      { path: 'login', component: LoginComponent },
      { path: 'Quoues', component: QuotesComponent },
      { path: 'tag', component: TagComponent },
      { path: 'editprofile', component: EditprofileComponent },
      { path: 'header-reuse', component: HeaderReuseComponent },
      { path: 'sidebarreuse', component: SideNavReuseComponent },
      { path: 'users', component: UsersComponent },
      { path: 'demo', component: DemoComponent },
     
    ]),
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
