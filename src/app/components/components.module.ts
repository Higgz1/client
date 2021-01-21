import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChooseIngredientsComponent } from './choose-ingredients/choose-ingredients.component';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { RandomReceiptsComponent } from './random-receipts/random-receipts.component';
import { BonAppHeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'ionic4-auto-complete';
import { FooterCartComponent } from './footer-cart/footer-cart.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { IngredientsPriorityComponent } from './ingredients-priority/ingredients-priority.component';
import { IngredientsReceiptsComponent } from './ingredients-receipts/ingredients-receipts.component';
import { IngredientsComponent } from './ingredients/ingredients.component';

const components = [
  ChooseIngredientsComponent, RandomReceiptsComponent, BonAppHeaderComponent,
  LoginComponent, FooterCartComponent, CartDetailsComponent, AddressFormComponent,
  IngredientsPriorityComponent, IngredientsReceiptsComponent, IngredientsComponent
];

@NgModule({
  declarations: components,
  imports: [
    IonicModule,
    FormsModule,
    CommonModule,
    AutoCompleteModule,
    TranslateModule.forChild()
  ],
  exports: components
})
export class ComponentsModule { }
