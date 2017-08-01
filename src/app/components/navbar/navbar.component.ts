import { Component, ViewChild, ElementRef } from '@angular/core';
declare var $:JQueryStatic;
@Component({
    selector: 'navbar',
    templateUrl: './navbar.html',
    styleUrls: ['./navbar.css'],
    
})


export class NavbarComponent {
    @ViewChild('registerForm') registerForm: ElementRef;
    @ViewChild('loginForm') loginForm: ElementRef;
    @ViewChild('loginFormLink') loginFormLink: ElementRef;
    @ViewChild('registerFormLink') registerFormLink: ElementRef;
    
    showLogin(){
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
    
}

