import { Component, computed, effect, inject, signal } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem, MessageService } from 'primeng/api';
import { RouterLink } from "@angular/router";
import { ButtonModule } from 'primeng/button';
import { AuthService } from 'src/app/core/services/auth-service';

@Component({
  selector: 'web-header',
  imports: [MenubarModule, RouterLink, ButtonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private authService = inject(AuthService);
  private messageService = inject(MessageService);
  items = signal<MenuItem[]>([]);
  userData = this.authService.displayUser;

  constructor() {
    effect(() => {
      this.items.set([
        {
          label: 'Home',
          routerLink: '/',
          icon: 'pi pi-home',
          // command: () => {
          //   this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Homepage Opened', life: 3000 });
          // }
        },
        {
          label: 'Counter',
          routerLink: '/counter',
          // command: () => {
          //   this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Counter Opened', life: 3000 });
          // }
        },
        {
          label: 'Courses',
          routerLink: '/courses',
          // command: () => {
          //   this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Courses Opened', life: 3000 });
          // }
        },
      ]);
    })
  }


}
