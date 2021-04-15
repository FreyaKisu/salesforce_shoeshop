import { LightningElement, wire} from 'lwc';
import getProductList from '@salesforce/apex/ProductController.getProductList';

export default class ShoppingCart extends LightningElement {
        selectedProduct;
 
        connectedCallback() {
         setTimeout(() => {
             this.ready = true;
         }, 3000);
     }
     
            @wire(getProductList) products;

            productSelected(event) {
                const productId = event.detail;
                this.selectedproduct = this.products.data.find(product => product.Id === productId);
            }
        
            get listIsNotEmpty() {
                return this.products && Array.isArray(this.products.data) && this.products.data.length > 0;
         }

         placeOrder (event){
            event.preventDefault();

            const selectedEvent = new CustomEvent('selected', { detail: this.products.Id });

            this.dispatchEvent(selectedEvent);
                    alert("Order successful!");
}
}