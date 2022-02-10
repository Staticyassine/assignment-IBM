import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Coffee } from 'src/app/models/coffee';

@Component({
  selector: 'card',
  templateUrl: './detail-card.component.html',
  styleUrls: ['./detail-card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailCardComponent implements OnInit {
  @Input() detailData: any
  @Output() showDetail = new EventEmitter<Coffee>();
  @Output() pinCard = new EventEmitter<Coffee>();
  @Input() arrowShowing: any

  pinIcon = "../../../assets/icons/PushPin.svg"
  unPinIcon = "../../../assets/icons/PushUnPinSlash.svg"

  constructor() { }

  ngOnInit(): void {
  }

  onShowDetail(event: any) {
    if (!event.target.classList.contains("pin-button")) this.showDetail.emit(this.detailData)
  }

  onPinCard() {
    this.detailData = { ...this.detailData, pined: !this.detailData.pined }
    this.pinCard.emit(this.detailData)
  }
}
