import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
 
  public chapters = [
    {
      title: "Chapter 1 | The Beginning",
      url: "/chapter1"
    },
      
    {
      title: "Chapter 2 | The Second Chapter",
      url: "/chapter2"
    },

    {
      title: "Chapter 3 | The Third Chapter",
      url: "/chapter3"
    },

    {
      title: "Chapter 4 | The Fourth Chapter",
      url: "/chapter4"
    },

    {
      title: "Chapter 5 | The Fifth Chapter",
      url: "/chapter5"
    },

    {
      title: "Chapter 6 | The Sixth Chapter",
      url: "/chapter6"
    }
  ];
  constructor() { }

  ngOnInit() {
    
  }

}
