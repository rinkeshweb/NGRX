import { Component, effect, inject, signal } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { RouterLink } from "@angular/router";
import { ButtonModule } from 'primeng/button';
import { Store } from '@ngrx/store';
import { selectUser } from 'src/app/features/auth/state/auth.selector';
import { AppState } from 'src/app/core/store/app.state';

@Component({
  selector: 'web-header',
  imports: [MenubarModule, RouterLink, ButtonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})

export class Header {
  private store = inject<Store<AppState>>(Store);
  items = signal<MenuItem[]>([]);
  loggedUser$ = this.store.selectSignal(selectUser);

  // Logout function to be implemented later
  logout() {
    console.log('logout');
  }

  constructor() {
    effect(() => {
      this.items.set([
        {
          label: 'Home',
          routerLink: '/',
          icon: 'pi pi-home',
        },
        {
          label: 'Counter',
          routerLink: '/counter',
        },
        {
          label: 'Courses',
          routerLink: '/courses',
        },
      ]);
    })
  }


}
