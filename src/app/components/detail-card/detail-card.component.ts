import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Coffee } from 'src/app/models/coffee';

@Component({
  selector: 'card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.sass']
})
export class DetailCardComponent implements OnInit {
  @Input() detailData: any
  @Output() showDetail = new EventEmitter<Coffee>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.detailData);
  }

  onShowDetail() {
    this.showDetail.emit(this.detailData)
  }
}
