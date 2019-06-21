import {Component, OnInit, Input, Output, EventEmitter, Injectable, ViewEncapsulation} from '@angular/core';
import {PictureService} from '../shared/picture.service';


@Component({
  selector: 'app-picturedetails',
  templateUrl: './picturedetails.component.html',
  styleUrls: ['./picturedetails.component.scss'],
  providers : [PictureService],
  encapsulation : ViewEncapsulation.ShadowDom
})
export class PicturedetailsComponent implements OnInit {
  @Input('incoming-pic') picture: {name: string, location: string, description: string, likes: number };
  @Output() like: EventEmitter<number> = new EventEmitter();
  liked: boolean = false;
  constructor( @Injectable() private pictureService: PictureService) { }
  servicePic: {name: string, location: string, description: string, likes: number };

  ngOnInit() {
    this.servicePic = this.pictureService.getPicture();
    console.log(this.servicePic);
  }

  increaseLike() {
    if (this.liked === true) {
      this.picture.likes = this.picture.likes - 1;
      this.liked = false;
    } else {
      this.picture.likes = this.picture.likes + 1;
      this.liked = true;
    }

    this.like.emit(this.picture.likes);
  }

}
