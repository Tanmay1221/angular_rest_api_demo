import { Component } from "@angular/core";
import {Product} from '../product';
import { ProductService } from "../product.service"
@Component({
    selector:'ptab',
    templateUrl:"./producttab.component.html"
})
export class ProducttabComponent{
    parr:Product[];
   p1:Product={id:0,name:"",qty:"",expDate:""};
   flag=false;
   f1=false;
   f2=false;
    constructor(private pservice:ProductService){}

    ngOnInit(){
      this.pservice.getAllProducts()
      .subscribe((r)=>{this.parr=r;})  
    }
    changeFlag(){
        this.flag=true;
        this.f1=true;
        this.f2=false;
    }
    updateData(p:Product){
        this.p1.id=p.id;
        this.p1.name=p.name;
        this.p1.qty=p.qty;
        this.p1.expDate=p.expDate;
        this.flag=true;
        this.f1=false;
        this.f2=true;
    }
    addProduct(){
        this.flag=false;
        this.pservice.addProductData(this.p1)
        .subscribe((r)=>{this.parr=r;})
    }
    updateProduct(){
        this.flag=false;
        this.pservice.updateProductData(this.p1)
        .subscribe((r)=>{this.parr=r;})
    }
    deleteData(p:Product){
        this.pservice.deleteProductData(p)
        .subscribe((r)=>{this.parr=r;})
    }
}
