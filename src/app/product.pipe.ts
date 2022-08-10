import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'product'
})
export class ProductPipe implements PipeTransform {

  transform(products:any[], value:string): any[] {

    console.log("product Pipe: search key:"+ value);

    console.log("Input:", products);

    if(!value) return products;

    if(!products) return [];

   

    // return products.filter(p=> p.brand.toLowerCase() == value.toLowerCase());

    return products.filter(p=> p.product.toLowerCase().includes(value.toLowerCase()));

}
}