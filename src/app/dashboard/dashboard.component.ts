import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { TagModule } from 'primeng/tag';
import { ReqresService, User } from '../data/reqres.service';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    ChartModule,
    TableModule,
    ButtonModule,
    AvatarModule,
    TagModule,
    TooltipModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  users: User[] = [];
  loading = true;

  // Dados fake para gráficos
  chartData: any;
  chartOptions: any;

  pieData: any;
  pieOptions: any;

  constructor(private reqresService: ReqresService) {}

  ngOnInit() {
    this.loadUsers();
    this.initCharts();
  }

  loadUsers() {
    this.loading = true;
    this.reqresService.getUsers().subscribe({
      next: (response) => {
        this.users = response.data;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erro ao carregar usuários:', error);
        this.loading = false;
      }
    });
  }

  initCharts() {
    // Gráfico de linha fake
    this.chartData = {
      labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
      datasets: [
        {
          label: 'Vendas 2024',
          data: [65, 59, 80, 81, 56, 55],
          fill: false,
          backgroundColor: '#2f4860',
          borderColor: '#2f4860',
          tension: .4
        }
      ]
    };

    // Gráfico de pizza fake
    this.pieData = {
      labels: ['Desktop', 'Mobile', 'Tablet'],
      datasets: [
        {
          data: [540, 325, 702],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }
      ]
    };

    this.chartOptions = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: '#495057'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        },
        y: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        }
      }
    };

    this.pieOptions = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: '#495057'
          }
        }
      }
    };
  }
}
