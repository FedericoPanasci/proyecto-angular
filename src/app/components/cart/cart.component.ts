import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public list: Movie[] = [];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getList().subscribe(list => this.list = list);
  }

  remove(movie: Movie){
    this.cartService.remove(movie);
  }

  clear(){
    this.list = this.cartService.clear();
  }
}
