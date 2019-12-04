import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products: any = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {

    this.http.get("http://localhost:3000/products")
      .subscribe(response => { //.subscribe mou dinei tin dunatothta na paro dedomena apo kapoia alli efarmogi
        console.log(response); //metavliti stin opoia apothikevontai ta dedomena apo to request
        this.products = response;
      });

  }

}
