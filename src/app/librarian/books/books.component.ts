import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
book=[
  {id:12323,name:"Bookname",popularity:4646,},
  {id:12323,name:"Bookname",popularity:4646,},
  {id:12323,name:"Bookname",popularity:4646,},
  {id:12323,name:"Bookname",popularity:4646,},
]
  constructor() { }

  ngOnInit(): void {
  }

}
