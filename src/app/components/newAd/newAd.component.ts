import { Component } from '@angular/core';
import { CategoryService } from '../../services/category/category.service'; 
import { UserService } from '../../services/user/user.service';
import { AdvertisementService } from '../../services/ads/advertisement.service';
@Component({
    selector: 'newAd',
    templateUrl: './newAd.html',
    styleUrls: ['./newAd.css'],
    providers: [CategoryService, AdvertisementService, UserService ]
})

export class NewAdComponent{
    categories:Array<any>=[];
    constructor(private categoryService:CategoryService, private adService:AdvertisementService, private userService:UserService){
        console.log("gufbsfgbkghffkljwerhrvguiomhsetghtioemsghlv");
        categoryService.getAllCategories().subscribe((response:any)=>{
            console.log(response);
            response.data.itemList.forEach((item:any)=>{
                this.categories.push(item.name);
            });
        });
    }

    postNewAd(contents:any){
        console.log("hi hello super cello");
        console.log("content ", contents);
        console.log(this.userService.getUserInfo());
        // this.adService.postAd(authtoken,contents).subscribe((response:Response)=>{
        //     console.log("response is ", response);
        // });
    }
}