import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from "../pipe/filter.pipe";

@Component({
    selector: 'app-products',
    standalone: true,
    templateUrl: './products.component.html',
    styleUrl: './products.component.scss',
    imports: [FormsModule, FilterPipe]
})
export class ProductsComponent implements OnInit{
  toFilter:string='';
  httpClient=inject(HttpClient);
  products: any[] = [];
  categorizedProducts: { [key: string]: any[] } = {};
  categories: string[] = ['groceries', 'furniture', 'fragrances', 'beauty'];
  ngOnInit(): void {
    this.fetchProducts();
  }
  fetchProducts(){
    this.httpClient.get('https://dummyjson.com/products')
    .subscribe((products:any)=>{
      console.log(products);
      this.products=products.products;
      this.categorizeProducts();

    });
  }
  categorizeProducts(): void {
    this.categories.forEach(category => {
      this.categorizedProducts[category] = this.products.filter(product => product.category === category);
    });
  }
}


