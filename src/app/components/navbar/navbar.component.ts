import { Component, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../../services/user/user.service';

import { Router } from '@angular/router';
declare var $:JQueryStatic;
@Component({
    selector: 'navbar',
    templateUrl: './navbar.html',
    styleUrls: ['./navbar.css'],
    providers: [UserService],
})


export class NavbarComponent{

    @ViewChild('registerForm') registerForm: ElementRef;
    @ViewChild('loginForm') loginForm: ElementRef;
    @ViewChild('loginFormLink') loginFormLink: ElementRef;
    @ViewChild('registerFormLink') registerFormLink: ElementRef;
    @ViewChild('myModal') myModal: ElementRef;
    loginFailed:boolean=false;
    isLoggedIn:boolean=false;
    registrationFailed:boolean=false;
    userName:string;
    constructor(private userSrvice:UserService, private router:Router){

    }

    showLogin(){
        this.loginFailed = false;
        $(this.loginForm.nativeElement).delay(100).fadeIn(100);
        $(this.registerForm.nativeElement).fadeOut(100);
        $(this.registerFormLink.nativeElement).removeClass('active');
        $(this.loginFormLink.nativeElement).addClass('active');

    }

    showRegister(){
        $(this.registerForm.nativeElement).delay(100).fadeIn(100);
        $(this.loginForm.nativeElement).fadeOut(100);
        $(this.loginFormLink.nativeElement).removeClass('active');
        $(this.registerFormLink.nativeElement).addClass('active');
    }

    getUserDetails(){
        this.userName = this.userSrvice.getUserInfo().userName;
    }
    login(credentials:any){
        console.log("credentials ", credentials);
        this.userSrvice.login(credentials).subscribe((response:any)=>{
            console.log("rest o/p ", response);
            console.log("authtoken ", response.data['auth-token'] );
            if(response.data['auth-token']==null){
                this.loginFailed=true;
            } else {
                this.loginFailed=false;
                this.isLoggedIn=true;
                this.userSrvice.setUserInfo(response.data['auth-token'], response.data.userId);
                $(this.myModal.nativeElement).modal("toggle");

                this.getUserDetails()
            }
        });
    }

    register(userInfo:any){
        console.log(userInfo);
        this.userSrvice.signup(userInfo).subscribe((response:any)=>{
            console.log(response);
            alert("Registration successful");
        }, (error)=>this.registrationFailed=true)
    }



}
