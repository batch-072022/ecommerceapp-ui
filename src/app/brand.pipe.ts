import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brand'
})
export class BrandPipe implements PipeTransform {

  transform(products:any[], value:string): any[] {
    console.log("Brand Pipe: search key:"+ value);
    console.log("Input:", products);
    if(!value) return products;
    if(!products) return [];
    
    // return products.filter(p=> p.brand.toLowerCase() == value.toLowerCase());
    return products.filter(p=> p.brand.toLowerCase().includes(value.toLowerCase()));
  }

}
