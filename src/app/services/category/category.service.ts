import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()

export class CategoryService{
    
    categories: Array<any> = [];
    url:string = 'http://192.168.3.144:9000/categories';
    categoriesObservable: any;
    
    constructor(private _http:Http){
       
       //this.categoriesObservable.subscribe((response:any)=>console.log("constructor -- ",response));
    }
    getAllCategories(){
        return this._http.get(this.url).map((response:any)=>response.json());
    }
    printJsonCat(){
        //console.log("services : ",this.categoriesObservable);
    }
}