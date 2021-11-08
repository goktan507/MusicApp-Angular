import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Album } from '../models/Album';
import { MusicServiceService } from '../service/music-service.service';

@Component({
  selector: 'app-create-album',
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.css']
})
export class CreateAlbumComponent implements OnInit {

  appForm: FormGroup;
  album: any = new Album(this.service.getAlbums.length, "", "", "", -1, "", []);

  constructor(private service: MusicServiceService, private router: Router) {
    this.appForm = new FormGroup({
      title: new FormControl(''),
      artist: new FormControl(''),
      description: new FormControl(''),
      year: new FormControl(''),
      image: new FormControl(''),
      tracks: new FormControl('')
    });
  }
  ngOnInit(): void {
  }

  onSubmit(data: any) {
    this.service.createAlbum(new Album(20, data.title, data.artist, data.description, data.year, data.image, []), () => this.service.createAlbum);
    this.router.navigate(['list-artists']);
  }
}
