import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Album } from '../models/Album';
import { MusicServiceService } from '../service/music-service.service';

@Component({
  selector: 'app-edit-album',
  templateUrl: './edit-album.component.html',
  styleUrls: ['./edit-album.component.css']
})
export class EditAlbumComponent implements OnInit {

  appForm: FormGroup;
  album: any;

  constructor(private service: MusicServiceService, private router: Router, private aRouter: ActivatedRoute) {
    
    this.appForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl(''),
      artist: new FormControl(''),
      description: new FormControl(''),
      year: new FormControl(''),
      image: new FormControl(''),
      tracks: new FormControl('')
    });
   }

  ngOnInit(): void {
    this.aRouter.params.subscribe(params => {
      this.album = this.service.getAlbum(params['artist'], params['id'], (album: Album) => {
        this.album = album;
      });
    })
  }

  OnSubmit(data:any){
    this.album = new Album(data.id, data.title, data.artist, data.description, data.year, data.image, this.album.tracks);
    this.service.updateAlbum(this.album, () => {
      this.service.getAlbum;
    });
    this.router.navigate(['list-artists']);
  }

}
