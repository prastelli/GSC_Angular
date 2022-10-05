import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  movies = [
    { name:  "Star Wars Episode X", rating: "PG" },
    { name:  "Rocky XV", rating: "PG-13" },
    { name:  "Jaws the Revenge", rating: "R" },
    { name:  "Avengers 6 - The Marriage of the Hulk", rating: "PG-13" },
    { name:  "Finding Dory's Grandkids", rating: "G" },
  ];

  constructor() { }

  ngOnInit() {
  }

  sortAsc() {
    // Implementar
    this.movies.sort(function (a, b) {
      if (a.rating > b.rating) {
        return 1;
      }
      if (a.rating < b.rating) {
        return -1;
      }
      // a must be equal to b
      return 0;
    })

  }

  sortDesc() {
    this.movies.sort(function (a, b) {
      if (a.rating < b.rating) {
        return 1;
      }
      if (a.rating > b.rating) {
        return -1;
      }
      // a must be equal to b
      return 0;
    })
  }

}

