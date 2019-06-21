import { Component, OnInit } from '@angular/core';
import {PictureService} from '../shared/picture.service';

@Component({
  selector: 'app-picture-list',
  templateUrl: './picturelist.component.html',
  styleUrls: ['./picturelist.component.scss']
})
export class PictureListComponent implements OnInit {
    pictures = [
        {
            name: 'Picture 1',
            location: '../../assets/images/pic1.jpeg',
            description: 'downloaded from unslpash.com, its a great resource for royalty free images.' ,
            likes: 2
        },
        {
            name: 'Pic2',
            location: '../../assets/images/pic2.jpeg',
            description: 'downloaded from unslpash.com, its a great resource for royalty free images.' ,
            likes: 3
        }
    ]


  constructor(private picService: PictureService) {
      console.log('From Pic Service ' + this.picService.getPicture());
  }

  ngOnInit() {

    }

    addLiketoPic(event) {
        console.log(event);
    }
}
