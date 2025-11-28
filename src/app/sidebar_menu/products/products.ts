import { Component, inject } from '@angular/core';
import { LoaderService } from '../../services/loader.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  private loader=inject(LoaderService)
  products:any
ngOnInit(): void {
  this.loader.show();

  fetch('https://fakestoreapiserver.reactbd.org/api/products?page=1&perPage=10')
    .then(res => res.json())
    .then(data => {
      this.products=data.data
      console.log(data);
      this.loader.hide(); 
    })
    .catch(err => {
      console.error('Fetch error:', err);
      this.loader.hide(); 
    });
}

}
