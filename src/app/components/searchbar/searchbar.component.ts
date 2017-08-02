import { Component, DoCheck } from '@angular/core';
import { CategoryService } from '../../services/category/category.service';
import { Router } from '@angular/router';
// import { AdvertisementService } from '../../services/ads/advertisement.service';
@Component({
    selector: './searchbar',
    templateUrl: './searchbar.html',
    styleUrls: ['./searchbar.css'],
    providers: [CategoryService]
})

export class SearchbarComponent {

    category:string;
    categories: Array<any> = [];
    constructor(private categoryService:CategoryService, private router:Router){
        categoryService.getAllCategories().subscribe((response:any)=>{
            response.data.itemList.forEach((item:any)=>{
                
                this.categories.push(item.name)
                console.log(item.name);
            });
        });
        //adService.getAllAdvertisements().subscribe((response:any)=>console.log(response));
    }

    filter(category:string){
        console.log("clicked ",category);
        this.router.navigate(['/',category]);
    }

}