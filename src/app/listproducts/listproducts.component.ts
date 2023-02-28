import { Component ,EventEmitter,Input, Output } from '@angular/core';
import { Product } from 'src/models/Product';

@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css']
})
export class ListproductsComponent
{
  @Input() pt : any

@Output() delrec = new EventEmitter<Product>()

fetchrecord(rec:Product)
  {
  this.delrec.emit(rec)
  }

}
