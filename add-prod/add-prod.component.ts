import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProductService } from '../prod-list/product.service';
import { Router } from '@angular/router';
import { Product } from '../prod-list/product.model';

@Component({
  selector: 'app-add-prod',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-prod.component.html',
  styleUrl: './add-prod.component.css',
})
export class AddProdComponent {
  title = 'Add Product';
  addProductForm: FormGroup;
  brands: string[] = [];
  categories: string[] = [];
  isSubmitted = false;
  formValid = false;

  // dependency injection
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {
    this.addProductForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      price: ['', [Validators.required, Validators.min(10)]],
      brand: ['', [Validators.required]],
      category: ['', [Validators.required]],
    });
    this.loadBrands();
    this.loadCategories();
  }

  get f() {
    return this.addProductForm.controls;
  }

  loadBrands(): void {
    this.brands = this.productService.getBrands();
  }

  loadCategories() {
    this.categories = this.productService.getCategories();
  }

  onSubmit() {
    if (this.addProductForm.valid) {
      this.isSubmitted = true;
      this.formValid = true;
      console.log(
        'postForm value ==>' + JSON.stringify(this.addProductForm.value)
      );

      this.productService
        .addProduct(this.addProductForm.value)
        .subscribe((response: Product) => {
          console.log(response);
          this.addProductForm.reset();
          this.router.navigate(['/view-prod']);
        });
    }
  }
}
