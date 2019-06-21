import {Injectable} from '@angular/core';

export class PictureService {

  constructor() {
  }

  getPicture(): any {
   return [
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
      },
      {
       name: 'Dashing Icon',
       location: '../../assets/images/pic2.jpeg',
       description: 'This is from our service which can be shared across multiple component within module, but can also be share outside.' ,
       likes: 3
     }
    ];


  }
}
