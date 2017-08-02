import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()

export class UserService{
    loginURL:string = 'http://192.168.3.144:9000/login';
    authtoken:string;
    username:string;

    constructor(private _http:Http){

    }
    login(credentials:any){
        let header = new Headers({'content-type':'application/json'});
        let option = new RequestOptions({headers:header});
        return this._http.post(this.loginURL,credentials, option).map((response:Response)=>response.json());
    }

    setUserInfo(authtoken:string, username:string){
        this.authtoken = authtoken;
        this.username = username;
        console.log("authtoken : ",this.authtoken,"\n","userID : ",this.username);
    }

    getUserInfo(){
        
            return {"authtoken":this.authtoken,"userName":this.username};
        
    }

    signup(userInfo:any){
        let url = 'http://192.168.3.144:9000/register';
        let header = new Headers({'content-type':'application/json'});
        let option = new RequestOptions({headers:header});
        return this._http.post(url, userInfo, option).map((response:Response)=>response.json());
    }
}