import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBySeller'
})
export class SearchBySellerPipe implements PipeTransform {

  transform(products:any[], value:string): any[] {

    console.log("searchBySeller: search key:"+ value);

    console.log("Input:", products);

    if(!value) return products;

    if(!products) return [];

   

    // return products.filter(p=> p.brand.toLowerCase() == value.toLowerCase());

    return products.filter(p=> p.author.toLowerCase().includes(value.toLowerCase()));

  }

}
