import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()

export class AdvertisementService{

    url:string = 'http://192.168.3.144:9000/posts/search';
    
    

    constructor(private _http:Http){
       
    }
    getAllAdvertisements(){
        return this._http.get(this.url).map((response:any)=>response.json());
    }

    getCategorisedAdvertisements(category:string){
        let url:string = 'http://192.168.3.144:9000/posts/search?category='+category;
        return this._http.get(url).map((response:any)=>response.json());
    }

    postAd(authtoken:string, contents:any){
        let url:string = 'http://192.168.3.144:9000/postAd';
        let header = new Headers({'content-type':'application/json'});
        header.append('auth-token',authtoken);
        let options = new RequestOptions({headers:header});
        return this._http.post(url,contents,options).map((response:any)=>response.json());
    }
}