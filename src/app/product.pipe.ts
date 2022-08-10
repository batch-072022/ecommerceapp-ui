import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'product'
})
export class ProductPipe implements PipeTransform {

  transform(products:any[], name:string): any[] {
    console.log("Product Pipe: search key:"+ name);
    console.log("Input:", products);

    if(!name) return products;

    if(!name) return [];

   

    //  return products.filter(p=> p.brand.toLowerCase() == value.toLowerCase());

    return products.filter(p=> p.product.toLowerCase().includes(name.toLowerCase()));

}
}
  
