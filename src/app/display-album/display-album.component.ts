import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-album',
  templateUrl: './display-album.component.html',
  styleUrls: ['./display-album.component.css']
})
export class DisplayAlbumComponent implements OnInit {
  @Input() album:any;
  constructor() { }

  ngOnInit(): void {
  }

}
