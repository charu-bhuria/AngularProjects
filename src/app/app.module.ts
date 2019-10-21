import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { ExampleComponent } from './components/example.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes= [
{path:'', component: HomeComponent},
{path:'contact', component: ContactComponent},
{path: 'about', component: AboutComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent
   
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
