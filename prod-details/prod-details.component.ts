import { Component } from '@angular/core';
import { Product } from '../prod-list/product.model';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../prod-list/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prod-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './prod-details.component.html',
  styleUrl: './prod-details.component.css',
})
export class ProdDetailsComponent {
  product: Product | undefined;
  productId: number;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.productId = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.productService
      .getProductById(this.productId)
      .subscribe((response: Product) => {
        this.product = response;
      });
  }
}
