import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

var headers_object = new HttpHeaders();
headers_object.append('Content-Type', 'application/json');
//headers_object.append("Authorization", "Basic " + btoa("username:password"));

const httpOptions = {
  headers: headers_object
};
@Injectable({
    providedIn:'root'
})
export class ProductService{
    baseURL:string=environment.ProductAPI_URL;
    
    constructor(private _httpClient:HttpClient){}
    getProduct(){
        return this._httpClient.get(this.baseURL+'api/product/getproducts',httpOptions);
    }
    testService(){
        return this._httpClient.get(this.baseURL+'api/Test/test',{responseType: 'text'});
    }
}