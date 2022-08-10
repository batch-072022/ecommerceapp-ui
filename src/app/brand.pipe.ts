import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brand'
})
export class BrandPipe implements PipeTransform {
  transform(products:any[], title:string): any[] {

    console.log("Brand Pipe: search key:"+ title);

    console.log("Input:", products);

    if(!title) return products;

    if(!products) return [];

   

    // return products.filter(p=> p.brand.toLowerCase() == value.toLowerCase());

    return products.filter(p=> p.brand.toLowerCase().includes(title.toLowerCase()));

}
}
