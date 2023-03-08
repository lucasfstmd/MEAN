import {Component} from '@angular/core';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
    dashboardAlive: boolean = true
    orderAlive: boolean | undefined;
    customersAlive: boolean | undefined;
    reportsAlive: boolean | undefined;
    integrationsAlive: boolean | undefined;

  setDashboard(): void {
      this.dashboardAlive = true;
    }

    setOrder(): void {
      this.dashboardAlive = false;
      this.orderAlive = true;
      this.customersAlive = false;
      this.reportsAlive = false;
      this.integrationsAlive = false;
    }

    setCustomers(): void {
      this.dashboardAlive = false;
      this.orderAlive = false;
      this.customersAlive = true;
      this.reportsAlive = false;
      this.integrationsAlive = false;

    }

    setReports(): void {
      this.dashboardAlive = false;
      this.orderAlive = false;
      this.customersAlive = false;
      this.reportsAlive = true;
      this.integrationsAlive = false;
    }

    setIntegrations(): void {
      this.dashboardAlive = false;
      this.orderAlive = false;
      this.customersAlive = false;
      this.reportsAlive = false;
      this.integrationsAlive = true;
    }
}
