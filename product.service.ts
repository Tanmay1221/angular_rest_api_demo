import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product'

@Injectable()
export class ProductService{
    baseUrl="http://localhost:8282/RestProductService/products";
    constructor(private http:HttpClient){
    }

    getAllProducts():Observable<Product[]>{
        return this.http.get<Product[]>(this.baseUrl)
    }
    addProductData(p1:Product):Observable<Product[]>{
        
        return this.http.post<Product[]>(this.baseUrl,p1);
    }
    updateProductData(p1:Product){
        return this.http.put<Product[]>(this.baseUrl+"/"+p1.id,p1);
    }
    deleteProductData(p:Product){
        return this.http.delete<Product[]>(this.baseUrl+"/"+p.id);

    }
}