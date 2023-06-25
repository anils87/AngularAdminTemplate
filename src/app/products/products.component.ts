import { Component } from '@angular/core';
import { ProductService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  productList:any[]=[];
  serviceStatus:any;
  constructor(private _productService:ProductService){}

  ngOnInit(){
     this._productService.getProduct().subscribe((resp:any)=>{
       this.productList = resp.resultList;
       console.log(this.productList);      
     });    
    this._productService.testService().subscribe((resp:any)=>{      
      console.log(resp);      
      this.serviceStatus= resp;      
    });
  }
}
