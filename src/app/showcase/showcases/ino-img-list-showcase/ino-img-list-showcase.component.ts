import {Component} from '@angular/core';

@Component({
  selector: 'app-ino-img-list-showcase',
  templateUrl: './ino-img-list-showcase.component.html',
  styleUrls: ['./ino-img-list-showcase.component.scss']
})
export class InoImgListShowcaseComponent {
  images = {
    beach: 'beach.jpg',
    fjord: 'fjord.jpg',
    forrest: 'forrest.jpg',
    liberty: 'liberty.jpg',
    mountains: 'mountains.jpg',
    trondheim: 'trondheim.jpg',
    waterfall: 'waterfall.jpg'
  };

}
