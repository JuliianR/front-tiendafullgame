import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { CreateGameComponent } from './components/create-game/create-game.component';
import { EditGameComponent } from './components/edit-game/edit-game.component';

const routes: Routes =[
    { path: '', component: ComponentsComponent },
    { path: 'home', component: ComponentsComponent },
    { path: 'create-game', component: CreateGameComponent },
    { path: 'edit-game/:id', component: EditGameComponent},
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
    useHash: false,
    relativeLinkResolution: 'legacy'
})
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
