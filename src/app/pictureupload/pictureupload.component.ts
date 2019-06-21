import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-pictureupload',
  templateUrl: './pictureupload.component.html',
  styleUrls: ['./pictureupload.component.scss']
})
export class PictureuploadComponent implements OnInit {

  constructor() { }
  pic: {name: string , type: string } = {name: '', type: ''};
  @ViewChild('pictitle') pictitle: ElementRef;
  @ViewChild('picdesc') picdesc: ElementRef;
  ngOnInit() {
  }


  update(title: HTMLInputElement , desc: HTMLInputElement, upload : HTMLButtonElement): void {
    this.pic.name = title.value;
    this.pic.type = desc.value;
    upload.setAttribute('disabled', 'disabled');
  }

  updateWithOutPassing(): void {
    this.pic.name = this.pictitle.nativeElement.value;
    this.pic.type = this.picdesc.nativeElement.value;
  }

}
