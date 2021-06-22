import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {

  @Input() currentBoolean?: boolean;

  // tslint:disable-next-line:ban-types
  list: String[] = ['Jean', 'Jacques', 'Martin'];

  constructor() { }

  ngOnInit(): void {
  }

}
