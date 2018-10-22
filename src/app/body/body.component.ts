import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  Name: string;
  Bio: string;
  Email: any;
  Phone: number;
  Location: Location;
  Interests: string;
  Quotes: string [];
  constructor() { }
  authorName: string;

  ngOnInit() {
    // this.Name = 'Gerald';
    // this.Bio = 'Iam a programmer';
    // this.Email = 'geerockface4@mail.com';
    // this.Phone = 3;
    // this.Location = {
    //   Country = 'Kenya';
    //   City = 'Nairobi';
    //   Street = 'Rosters';
    // }
    this.Quotes = ["This is just a quote for layout purposes"]; }
    onClick() {
      this.authorName = prompt('Enter Name of Author..') ;
    }
    addQuote(Quote) {
      this.Quotes.unshift(Quote);
      return false;
    }
    deleteQuote(Quote) {
      alert('Are you sure you want to Delete this Quote?')
      for (let i = 0 ; i < this.Quotes.length ; i++) {
        if (this.Quotes[i] === Quote) {
          this.Quotes.splice(i, 1);
        }

      }
    }
    upVote() {
    //   const likes = [];
    //   document.write()
    //  for(let count = 0; count; count > likes.length; count +=1 ;Infinity ) {
    //    alert(count);
     }

}

// interface Location {
//   Country: string;
//   City: string;
//   Street: string;

// }
// }