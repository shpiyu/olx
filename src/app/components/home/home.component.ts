import { Component, DoCheck } from '@angular/core';
import { AdvertisementService } from '../../services/ads/advertisement.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
    selector: 'home',
    templateUrl: './home.html',
    styleUrls: ['./home.css'],
    providers: [AdvertisementService]
})

export class HomeComponent{

    urlCategory:string;
    advertisements:Array<any>=[];

    constructor(private adService:AdvertisementService, private activatedRoute:ActivatedRoute){

         this.urlCategory = this.activatedRoute.snapshot.params['category'];

         this.activatedRoute.params.subscribe((val:any)=>{
             this.urlCategory = val.category;
             this.filterAdsByCategory(this.urlCategory);
         })
        
        if(this.urlCategory!=undefined ){
            console.log("urlCategory", this.urlCategory);
            console.log("it'll work");
            this.filterAdsByCategory(this.urlCategory);
        } else {
            console.log("yaha agaya");
        adService.getAllAdvertisements().subscribe((response:any)=>{
            console.log(response);
            response.data.advertiseList.forEach((ad:any)=>{
                this.advertisements.push({
                    "title":ad.title,
                    "username":ad.name,
                    "date":ad.createdDate,
                    "description":ad.description
                });
            });
        });
    }
    
    }

    filterAdsByCategory(category:string){
        console.log("filter inside ", category);
        this.adService.getCategorisedAdvertisements(category).subscribe((response:any)=>{
            console.log(category, " ads recieved");
            this.advertisements = [];
            response.data.advertiseList.forEach((ad:any)=>{
                
                this.advertisements.push({
                    "title":ad.title,
                    "username":ad.name,
                    "date":ad.createdDate,
                    "description":ad.description
                });

            });


        });

        console.log(this.advertisements);
    }

    

}