import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { GauravPipe } from './gaurav.pipe';
import { ServerService } from './server.service';
import {HttpClientModule} from '@angular/common/http';

const appRoute:Routes=[{
  path:'',
  component:HomeComponent
},
{
  path:'user',
  component:UserComponent
}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    GauravPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
