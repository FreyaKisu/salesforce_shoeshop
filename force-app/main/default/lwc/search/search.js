import { LightningElement, wire } from 'lwc';

export default class Search extends LightningElement {
    searchKey = '';
    maxPrice = 100;

    filters = {
        searchKey: '',
        maxPrice: 100
    };

    handleSearchKeyChange(event) {
        this.filters.searchKey = event.target.value;
        this.delayedFireFilterChangeEvent();
    }

    handleMaxPriceChange(event) {
        const maxPrice = event.target.value;
        this.filters.maxPrice = maxPrice;
        this.delayedFireFilterChangeEvent();
    }

    handleCheckboxChange(event) {
        if (!this.filters.categories) {
            // Lazy initialize filters with all values initially set
            this.filters.categories = this.categories.data.values.map(
                (item) => item.value
            );
           
        }
        const value = event.target.dataset.value;
        const filterArray = this.filters[event.target.dataset.filter];
        if (event.target.checked) {
            if (!filterArray.includes(value)) {
                filterArray.push(value);
            }
        } else {
            this.filters[event.target.dataset.filter] = filterArray.filter(
                (item) => item !== value
            );
        }
       
    }

}
