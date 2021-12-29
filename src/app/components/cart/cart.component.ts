import { Component, OnInit } from '@angular/core';
import { MovieAPI } from 'src/app/models/movieApi.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  urlPath: string = 'https://image.tmdb.org/t/p/w500';
  public list: MovieAPI[] = [];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getList().subscribe(list => this.list = list);
  }

  remove(movie: MovieAPI){
    this.cartService.remove(movie);
  }

  clear(){
    this.list = this.cartService.clear();
  }
}
