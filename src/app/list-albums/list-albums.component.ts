import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../models/Album';
import { Artist } from '../models/Artist';
import { MusicServiceService } from '../service/music-service.service';

@Component({
  selector: 'app-list-albums',
  templateUrl: './list-albums.component.html',
  styleUrls: ['./list-albums.component.css']
})
export class ListAlbumsComponent implements OnInit {

  @Input() artist: any;
  albums: any;
  selectedAlbum: any;


  constructor(private service: MusicServiceService) {

  }

  ngOnInit() {
    this.service.getAlbums(this.artist.Name, (albums: Album[]) => {
      this.albums = albums;
    });
  }

  public onSelectedAlbum(album: Album) {
    this.selectedAlbum = album;
  }

}
