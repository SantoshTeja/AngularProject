import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent  {
  products:any;
  //  constructor(private productServices:ProductsService)
  // {
  //   this.products=productServices.getallproducts();
  //  }
  filteredString:string='';
  sortby:any='1';
   errMsg:any;
  constructor(proService:ProductsService){
    proService.getallproducts().subscribe(
      result => this.products = result,
      error => this.errMsg = error
    )
}
}
