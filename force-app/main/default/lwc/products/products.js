import { LightningElement, api } from 'lwc';
// Product schema
import CATEGORY_FIELD from '@salesforce/schema/Product__c.Category__c';
import NAME_FIELD from '@salesforce/schema/Product__c.Name';
import PRICE_FIELD from '@salesforce/schema/Product__c.Price__c';

export default class Products extends LightningElement {
    @api product;

     //demo data
   products = [
    {
        Id: 1,
        Name: 'Model 1',
        Category: 'street',
        Price: 50
    },
    {
        Id: 2,
        Name: 'Model 2',
        Category: 'sport',
        Price: 80
    },
    {
        Id: 3,
        Name: 'Model 3',
        Category: 'outdoor',
        Price: 100
    },
];

   id= Products.Id;
   name = Products.Name;
   category = Products.Category;
   price = Products.Price;
   ready = false;
    
  

    connectedCallback() {
        setTimeout(() => {
            this.ready = true;
        }, 3000);
    }
    
        addToCart (event){
						event.preventDefault();

						const selectedEvent = new CustomEvent('selected', { detail: this.product.Id });

						this.dispatchEvent(selectedEvent);
								alert("You added: " + this.name + " to your cart.");
        }

}