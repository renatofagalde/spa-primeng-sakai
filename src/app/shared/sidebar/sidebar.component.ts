import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    MenuModule,
    ButtonModule,
    AvatarModule,
    BadgeModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {

  userEmail: string = '';
  userName: string = '';
  userRole: string = 'Admin';
  userInitials: string = 'U'; // ← Adicionar propriedade para iniciais

  menuItems = [
    {
      label: 'Dashboard',
      icon: 'pi pi-home',
      route: '/dashboard',
      badge: '3'
    },
    {
      label: 'Usuários',
      icon: 'pi pi-users',
      route: '/users',
      badge: '12'
    },
    {
      label: 'Produtos',
      icon: 'pi pi-box',
      route: '/products',
      badge: '5'
    },
    {
      label: 'Relatórios',
      icon: 'pi pi-chart-bar',
      route: '/reports'
    },
    {
      label: 'Configurações',
      icon: 'pi pi-cog',
      route: '/settings'
    },
    {
      label: 'Suporte',
      icon: 'pi pi-question-circle',
      route: '/support'
    }
  ];

  constructor(
    private authService: AuthService,
    public router: Router // ← Tornar público para acessar no template
  ) {}

  ngOnInit() {
    this.loadUserData();
  }

  loadUserData() {
    const email = localStorage.getItem('user_email') || 'user@example.com';
    this.userEmail = email;

    // Extrair nome do email ou simular baseado no email
    if (email.includes('eve.holt')) {
      this.userName = 'Eve Holt';
      this.userRole = 'Super Admin';
    } else {
      this.userName = email.split('@')[0].replace('.', ' ');
      this.userRole = 'Admin';
    }

    // Calcular iniciais
    this.userInitials = this.userName
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  }

  navigateTo(route: string) {
    if (route) {
      this.router.navigate([route]);
    }
  }

  logout() {
    this.authService.logout();
  }
}
