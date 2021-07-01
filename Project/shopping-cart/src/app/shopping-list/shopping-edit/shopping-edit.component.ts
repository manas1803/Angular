import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  OnDestroy
} from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ShoppingListService } from 'src/app/Services/shopping-list.service';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  @ViewChild('data', { static: false }) dataForm:NgForm;
  subscriptionList:Subscription;
  editMode:boolean = false;
  editedItemIndex:number;
  editingItem:Ingredient;
  constructor(private shoppingService:ShoppingListService) { }

  ngOnInit() 
  {
    this.subscriptionList = this.shoppingService.editShoppingList.subscribe((id:number)=>{
      this.editMode = true;
      
      this.editedItemIndex = id;
      this.editingItem = this.shoppingService.getIngredient(this.editedItemIndex);

      this.dataForm.setValue({
        name:this.editingItem.name,
        amount:this.editingItem.amount
      })
    }); 
  }

  onAddItem() {
    const newIngredient = new Ingredient(this.dataForm.value.name,this.dataForm.value.amount);
    if(this.editMode){
      this.shoppingService.updateIngredients(this.editedItemIndex,newIngredient);
    }
    else{
    this.shoppingService.ingredientAdded(newIngredient);
    }
    this.editMode = false;
    this.dataForm.reset();
  }
  onClear(){
    this.dataForm.reset();
    this.editMode = false;
  }
  onDelete(){
      this.shoppingService.deleteIngredients(this.editedItemIndex);
      this.dataForm.reset();
      this.editMode = false;
  }
  ngOnDestroy(): void {
    this.subscriptionList.unsubscribe();
  }

}
