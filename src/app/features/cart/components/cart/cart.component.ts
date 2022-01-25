import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MovieAPI } from 'src/app/models/movieApi.model';
import { CartService } from 'src/app/services/cart.service';
import Swal from 'sweetalert2';
import { cartClear, cartDeleteMovie } from '../../store/cart-actions';
import { CartState } from '../../store/cart-store.model';
import { cartStateSelector } from '../../store/cart.selector';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  urlPath: string = 'https://image.tmdb.org/t/p/w500';
  public list: MovieAPI[] = [];
  constructor(
    private cartService: CartService,
    private store: Store
    ) {}
    listEfects!: Observable<CartState>;
    ngOnInit(): void {
    this.listEfects = this.store.pipe(select(cartStateSelector))
    this.listEfects.subscribe(data => this.list = data.movies)
    // this.cartService.getListCartApi().subscribe((list) => {
    //   this.list = list;
    //   console.log('ngoninit - ' + list);
    // });
  }

  remove(movie: MovieAPI) {
    this.store.dispatch(cartDeleteMovie({movie: movie}))
    this.listEfects = this.store.pipe(select(cartStateSelector))
    this.listEfects.subscribe(data => this.list = data.movies)

    console.log(movie);
    console.log(this.list);
    // this.cartService.removeCartApi(movie).subscribe((response) => {
    //   this.cartService.getListCartApi().subscribe((response) => {
    //     this.list = response;
    //   });
    // });
    Swal.fire({
      icon: 'success',
      title: 'This movie was removed',
      showConfirmButton: false,
      timer: 1500,
    });
  }

  clear() {
    this.store.dispatch(cartClear())
    this.listEfects = this.store.pipe(select(cartStateSelector))
    this.listEfects.subscribe(data => this.list = data.movies)

    // this.cartService.getListCartApi().subscribe((response) => {
    //   this.list = response
    // })
    // this.cartService.clearCartApi().subscribe((response) => {
    //   this.cartService.getListCartApi().subscribe((response) => {
    //     this.list = response;
    //   });
    // });
    Swal.fire({
      icon: 'success',
      title: 'All movies were removed',
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
