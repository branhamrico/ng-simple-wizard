import { Component } from '@angular/core';
import { BurgerServiceService } from './burger-service.service';
import { WizardService } from './wizard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public message = '';

  private vegetables = 'tomatoes, mushrooms, cucumbers, leaflettuce, spinach, kale, chard, arugula, peppers, onions';
  private cheeses = 'cheddar, bluecheese, gouda, goatcheese, swiss';
  private veggiesOriginal = {};
  private cheeseOriginal = {};

  public veggies = {};
  public cheese = {};
  public bunRadios;
  public dressing;
  public patty;

  constructor(private burgerService: BurgerServiceService, private wiz: WizardService) {
    this.reset();
  }

  private reset() {
    this.bunRadios = null;
    this.dressing = null;
    this.patty = null;
    this.veggies = {};
    this.cheese = {};
    this.vegetables.split(',').forEach((val) => {
      this.veggies[val.trim()] = false;
    });
    this.cheeses.split(',').forEach((val) => {
      this.cheese[val.trim()] = false;
    });
  }

  public beforeStep(e) {
    console.log(e);
  }

  public afterStep(e) {
    console.log(e);
  }

  public onComplete(e) {
    this.burgerService.submitOrder().then((res) => {
      if (res.status) {
        this.message = res.message;
        this.wiz.reset();
        this.reset();
        setTimeout(() => this.message = '', 2000);
      }
    });
  }

  public get hasSelectedVeggies() {
    let hasSelected = false;
    for (const k in this.veggies) {
      if (this.veggies.hasOwnProperty(k)) {
        if (this.veggies[k]) {
          hasSelected = true;
          break;
        }
      }
    }
    return hasSelected;
  }

  public get hasSelectedCheeses() {
    let hasSelected = false;
    for (const k in this.cheese) {
      if (this.cheese.hasOwnProperty(k)) {
        if (this.cheese[k]) {
          hasSelected = true;
          break;
        }
      }
    }
    return hasSelected;
  }

  public veggiesSelected() {
    const v = [];
    for (const k in this.veggies) {
      if (this.veggies.hasOwnProperty(k)) {
        if (this.veggies[k]) {
          v.push(k);
        }
      }
    }
    return v;
  }

  public cheesesSelected() {
    const v = [];
    for (const k in this.cheese) {
      if (this.cheese.hasOwnProperty(k)) {
        if (this.cheese[k]) {
          v.push(k);
        }
      }
    }
    return v;
  }
}
