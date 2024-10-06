import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SinglefruitComponent } from './singlefruit/singlefruit.component';
import { FruitlisdataService } from '../shared/service/fruitlisdata.service';

@Component({
  selector: 'app-fruitlist',
  standalone: true,
  imports: [CommonModule, SinglefruitComponent],
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.scss'
})
export class FruitlistComponent {

fruitlisdata = inject(FruitlisdataService);
fruitlist = this.fruitlisdata.fruitlist;

fontColorGood = "green";
fontColorBad = "red";
howItWorks = "Fine";


}
