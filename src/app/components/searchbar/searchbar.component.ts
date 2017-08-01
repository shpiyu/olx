import { Component } from '@angular/core';
import { CategoryService } from '../../services/category/category.service';
@Component({
    selector: './searchbar',
    templateUrl: './searchbar.html',
    styleUrls: ['./searchbar.css'],
    providers: [CategoryService]
})

export class SearchbarComponent{
    categories:Array<any>=[];
    constructor(private categoryService:CategoryService){
        categoryService.getAllCategories().subscribe((response:any)=>{
            response.data.itemList.forEach((item:any)=>{
                
                this.categories.push(item.name)
            });
        });
    }

}