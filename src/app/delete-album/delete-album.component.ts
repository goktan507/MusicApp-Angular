import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MusicServiceService } from '../service/music-service.service';

@Component({
  selector: 'app-delete-album',
  templateUrl: './delete-album.component.html',
  styleUrls: ['./delete-album.component.css']
})
export class DeleteAlbumComponent implements OnInit {


  constructor(private service: MusicServiceService, private router: Router, private aRouter: ActivatedRoute) { 
  }

  ngOnInit(): void {
    this.aRouter.params.subscribe(params => {
      this.service.deleteAlbum(params['id'], params['artist'], () => {
        this.service.createAlbum;
      })
      console.log(`Album with ID: ${params['id']} has been removed`);
      this.router.navigate(['list-artists']);
    })
  }

}
