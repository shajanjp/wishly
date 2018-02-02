import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app.routing.module';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { WelcomeComponent } from './welcome.component';
import { ByeComponent } from './bye.component';

@NgModule({
	declarations: [
	AppComponent,
	HomeComponent,
	WelcomeComponent,
	ByeComponent
	],
	imports: [
	BrowserModule,
	FormsModule,
	CommonModule,
	AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }