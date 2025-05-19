import { Component } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(public router: Router) {}

  months: any = {
    one: 20,
    two: 20,
    three: 20,
    four: 20
  }

  onValueMonthOne(e: RangeCustomEvent) {
    this.months.one = e.detail.value
  }

  onValueMonthTwo(e: RangeCustomEvent) {
    this.months.two = e.detail.value
  }

  onValueMonthThree(e: RangeCustomEvent) {
    this.months.three = e.detail.value
  }

  onValueMonthFour(e: RangeCustomEvent) {
    this.months.four = e.detail.value
  }

  toResultPage() {
    this.router.navigateByUrl(`/result/${this.months.one}/${this.months.two}/${this.months.three}/${this.months.four}`)
  }

}
