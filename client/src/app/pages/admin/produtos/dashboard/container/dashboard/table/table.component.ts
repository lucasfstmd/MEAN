import { Component } from '@angular/core';

interface Dados {
  date: string;
  name: string;
  shipTo: string;
  paymentMethod: string;
  salesAmount: string;
}

const ElementData: Dados[] = [
  { date: '16 Mar, 2019', name: 'Elvis Presley', shipTo: 'Tupelo, MS', paymentMethod: 'VISA ⠀•••• 3719', salesAmount: '$312.44' },
  { date: '16 Mar, 2019', name: 'Paul McCartney', shipTo: 'London, UK', paymentMethod: 'VISA ⠀•••• 2574', salesAmount: '$866.99' },
  { date: '16 Mar, 2019', name: 'Tom Scholz', shipTo: 'Boston, MA', paymentMethod: 'MC ⠀•••• 1253', salesAmount: '$100.81' },
  { date: '16 Mar, 2019', name: 'Michael Jackson', shipTo: 'Gary, IN', paymentMethod: 'AMEX ⠀•••• 2000', salesAmount: '$654.39' },
  { date: '15 Mar, 2019', name: 'Bruce Springsteen', shipTo: 'Long Branch, NJ', paymentMethod: 'VISA ⠀•••• 5919', salesAmount: '$212.79' },
]
@Component({
  selector: 'table-custom',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  displayedColumns: string[] = ['date', 'name', 'shipTo', 'paymentMethod', 'salesAmount'];
  dataSource = ElementData;

}
