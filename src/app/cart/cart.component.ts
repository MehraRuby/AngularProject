import { Component ,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent
{
  //@Input() itemname:any
  @Input() pr:any

  str=" I am Child Cart";

  @Output() child = new EventEmitter<string>()

  releasedata()
  {
    this.child.emit(this.str)
  }




}
