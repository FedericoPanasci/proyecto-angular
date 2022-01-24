import { Component, OnInit } from '@angular/core';
import { MovieAPI } from 'src/app/models/movieApi.model';
import { CartService } from 'src/app/services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  urlPath: string = 'https://image.tmdb.org/t/p/w500';
  public list: MovieAPI[] = [];
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getListCartApi().subscribe((list) => {
      this.list = list;
      console.log('ngoninit - ' + list);
    });
  }

  remove(movie: MovieAPI) {
    console.log(movie);
    console.log(this.list);
    this.cartService.removeCartApi(movie).subscribe((response) => {
      this.cartService.getListCartApi().subscribe((response) => {
        this.list = response;
      });
    });
    Swal.fire({
      icon: 'success',
      title: 'This movie was removed',
      showConfirmButton: false,
      timer: 1500
    })
  }

  clear() {
    this.cartService.clearCartApi().subscribe(response => {
      this.cartService.getListCartApi().subscribe((response) => {
        this.list = response;
      });
    });
    Swal.fire({
      icon: 'success',
      title: 'All movies were removed',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
