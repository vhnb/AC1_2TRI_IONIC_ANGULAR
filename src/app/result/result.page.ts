import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class ResultPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  months: any = {
    one: 20,
    two: 20,
    three: 20,
    four: 20
  }

  fruits = [
    { name: 'Morango', min: 15, max: 25 },
    { name: 'Uva', min: 20, max: 30 },
    { name: 'Laranja', min: 15, max: 30 },
    { name: 'Banana', min: 26, max: 30 },
    { name: 'Maça', min: 18, max: 24 },
    { name: 'Abacaxi', min: 22, max: 32 },
    { name: 'Manga', min: 24, max: 30 },
    { name: 'Pêssego', min: 15, max: 25 },
    { name: 'Cereja', min: 15, max: 20 },
    { name: 'Melancia', min: 25, max: 30 }
  ]

  suitableFruits: any = []

  ngOnInit() {
    this.months.one = this.activatedRoute.snapshot.paramMap.get('month1')
    this.months.two = this.activatedRoute.snapshot.paramMap.get('month2')
    this.months.three = this.activatedRoute.snapshot.paramMap.get('month3')
    this.months.four = this.activatedRoute.snapshot.paramMap.get('month4')

    this.calcSuitableFruit()
  }

  calcSuitableFruit() {
    const average = (Number(this.months.one) + Number(this.months.two) + Number(this.months.three) + Number(this.months.four)) / 4
    
    this.suitableFruits = this.fruits.filter(fruit => average >= fruit.min && average <= fruit.max)
  }

}
