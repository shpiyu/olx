import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()

export class CategoryService{
    
    
    url:string = 'http://192.168.3.144:9000/categories';
    
    
    constructor(private _http:Http){
       
    }
    getAllCategories(){
        return this._http.get(this.url).map((response:any)=>response.json());
    }
}