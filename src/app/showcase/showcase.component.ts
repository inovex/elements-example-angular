import {Component, HostListener, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ShowcaseComponent implements OnInit {

  constructor() { }

  @Input() dialogOpen = false;

  @HostListener('openChange', ['$event'])
  public onOpenChange(event: any): void
  {
    event.stopPropagation();
  }

  ngOnInit(): void {

  }


  toggleDialog() {
    console.debug(`Dialog is open: ${this.dialogOpen}`);
    this.dialogOpen = !this.dialogOpen;
  }
}
