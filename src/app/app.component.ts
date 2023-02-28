import { Component} from '@angular/core';

import { Product } from 'src/models/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'InputDirectiveParentToChild';

  currentproduct=''
  prdt = new Product()  // declare an object which can access single record entry
  data = {}
  childstr=''

  list:Product[]=[]

  addproduct()
  {
      this.data = {prnm:this.prdt.prnm , price : this.prdt.price , qty : this.prdt.qty , dt:this.prdt.dt}
      this.list.push(this.data);
  }

  fetchcartstr(e : any)
  {
      this.childstr=e
  }

  deleterecord(e : any)
  {
    let d = this.list.indexOf(e)
    this.list.splice(d,1)
  }


}
