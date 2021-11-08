import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Artist } from '../models/Artist';
import { MusicServiceService } from '../service/music-service.service';

@Component({
  selector: 'app-list-artists',
  templateUrl: './list-artists.component.html',
  styleUrls: ['./list-artists.component.css']
})
export class ListArtistsComponent implements OnInit {

  selectedArtist: any;
  artists: any;

  constructor(private route: ActivatedRoute, private service: MusicServiceService) {

  }

  ngOnInit() {
    this.route.queryParams.subscribe(() => {
      this.service.getArtists((artists: Artist[]) => {
        this.artists = artists;
        this.selectedArtist = null;
      });
    });
  }

  public onSelectArtist(artist: Artist) {
    this.selectedArtist = artist;
  }

}
