import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByPrice'
})
export class SearchByPricePipe implements PipeTransform {

  transform(products:any[], value:number): any[] {

    console.log("SearchByPrice: search key:"+ value);

    console.log("Input:", products);

    if(!value) return products;

    if(!products) return [];

   

    // return products.filter(p=> p.brand.toLowerCase() == value.toLowerCase());

    return products.filter(p=> p.price<=value );

  }

}
