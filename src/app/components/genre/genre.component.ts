import {Component, Input, OnInit} from '@angular/core';
import {IGenre} from "../../interfaces";

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  @Input()
  genre: IGenre;
  constructor() { }

  ngOnInit(): void {
  }

}
