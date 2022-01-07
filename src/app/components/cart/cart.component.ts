import { Component, OnInit } from '@angular/core';
import { MovieAPI } from 'src/app/models/movieApi.model';
import { CartService } from 'src/app/services/cart.service';

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

  // remove(movie: MovieAPI){
  //   this.cartService.remove(movie);
  // }
  remove(movie: MovieAPI) {
    console.log(movie);
    console.log(this.list);
    this.cartService.removeCartApi(movie).subscribe((response) => {
      this.list = response;
      this.cartService.getListCartApi().subscribe((response) => {
        this.list = response;
      });
    });
  }

  clear() {
    this.list.forEach((movie) => {
      this.remove(movie);
    });
  }
  // clear(){
  //   this.list = this.cartService.clear();
  // }
}
