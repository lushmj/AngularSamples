import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Product } from './product.model';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from './product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prod-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './prod-list.component.html',
  styleUrl: './prod-list.component.css',
})
export class ProdListComponent implements OnInit, AfterViewInit {
  productsList: Product[];
  searchQuery: string = '';
  filteredProductsList: Product[];
  paginatedProductsList: Product[];
  currentPage: number = 1;
  pageSize: number = 2;

  constructor(private router: Router, private productService: ProductService) {
    this.productsList = [];
    this.filteredProductsList = [];
    this.paginatedProductsList = [];
  }

  ngOnInit() {
    this.productService.getProducts().subscribe((response: Product[]) => {
      this.productsList = response;
      this.filteredProductsList = this.productsList;
      this.updatePaginatedProductsList();
    });
  }
  ngAfterViewInit(): void {
    console.log('ViewProductsComponent View initialized'); // Log the initialization of
  }
  updatePaginatedProductsList(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedProductsList = this.filteredProductsList.slice(
      startIndex,
      endIndex
    );
  }

  changePage(page: number): void {
    this.currentPage = page;
    this.updatePaginatedProductsList();
  }

  // 12 records / page size = 5
  // total number of pages = 3 => [1, 2, 3]
  get pages(): number[] {
    // number of pages
    const totalPages = Math.ceil(
      this.filteredProductsList.length / this.pageSize
    );

    const pages: number[] = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.productsList = products;
    });
  }

  addProduct(): void {
    this.router.navigate(['/add-product']);
  }
  deleteProduct(productId: number): void {
    const confirmation = confirm(
      'Are you sure you want to delete this product?'
    );
    if (confirmation) {
      this.productService.deleteProduct(productId).subscribe(() => {
        this.loadProducts();
      });
    }
  }
  viewProduct(productId: number): void {
    this.router.navigate(['/view-prod', productId]);
  }
  editProduct(productId: number): void {
    this.router.navigate(['/edit-prod', productId]);
  }

  onSearch(): void {
    if (this.searchQuery) {
      console.log('Search Query: ', this.searchQuery);
      // If there is a search query, filter the productsList
      this.filteredProductsList = this.productsList.filter((product) =>
        product.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      // If there is no search query, show all products
      this.filteredProductsList = this.productsList;
    }
  }
}
