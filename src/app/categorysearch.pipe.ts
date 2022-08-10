import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categorysearch'
})
export class CategorysearchPipe implements PipeTransform {

  transform(products:any[], value:string): any[] {
    console.log("categorysearch: search key:"+ value);
    console.log("Input:", products);
    if(!value) return products;
    if(!products) return [];
    
    // return products.filter(p=> p.brand.toLowerCase() == value.toLowerCase());
    return products.filter(p=> p.Category.toLowerCase().includes(value.toLowerCase()));
  }

}
