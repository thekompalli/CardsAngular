import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-add-on',
  templateUrl: './add-on.component.html',
  styleUrls: ['./add-on.component.scss']
})
export class AddOnComponent implements OnInit {
  @Input('data') data;
  constructor() { }

  ngOnInit(): void {
  }

}
