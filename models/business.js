const Checkout = require("./checkout");
const Item = require("./item");
const Offer = require("./offer");

class Business {
    constructor(name) {

        // Business name
        this.name = name;

        // Stock with al the business items
        this.stock = {};

        // Offers set in the business
        this.offers = {};

        // Checkout to get our cart and make the price with the offers
        this.checkout = new Checkout({ items: this.getProducts(), offers: this.getOffers() });
        this.mockInit();
    }
    /*
    * Mock init with data requirements about the study case
    */
    mockInit() {
        // offer1 = new Offer('buy-one-get-one-free', 'SR1', 'PROPORTIONAL', 50, 2)
        // offer2 = new Offer('3-or-more-GR1-10%', 'SR1', 'BASE', 10, 3)
        // offer1 = new Offer('3x1-in-pizza', 'pizza', 'PROPORTIONAL', 33, 3);
        this.addProduct(new Item('GR1', 'Green tea', 3.11));
        this.addProduct(new Item('SR1', 'Strawberries', 5.00));
        this.addProduct(new Item('CF1', 'Coffee', 11.23));
        this.addProduct(new Item('PIZZA', 'Pizza nueva', 10));
        // const itemUpdated = new Item('CF1', 'Green TEAA', 14);
        // this.updateProduct(itemUpdated)
        this.addOffer(new Offer('buy-one-get-one-free', 'GR1', 'P', 2, 1));
        this.addOffer(new Offer('3-or-more-GR1-10%', 'SR1', 'B', 3, 10));
        this.addOffer(new Offer('3x2-in-pizza', 'PIZZA', 'P', 3, 2));

        // const offerUpdated = new Offer('3x1-in-pizza', 'PIZZA', 'PROPORTIONAL', 33, 3);
        // this.updateOffer(offerUpdated);
        // this.offers['buy-one-get-one-free'] = {article: 'GR1', type: 'PROPORTIONAL', discount: 50}
        this.checkout = new Checkout({ items: this.getProducts(), offers: this.getOffers() })
        // this.checkout.scan('GR1');
        // this.checkout.scan('SR1');
        // this.checkout.scan('GR1');
        // this.checkout.scan('GR1');
        // this.checkout.scan('CF1');
        // this.checkout.scan('GR1');
        // this.checkout.scan('GR1');
        // this.checkout.scan('SR1');
        // this.checkout.scan('SR1');
        // this.checkout.scan('SR1');
    }
    /*
    * Reload the checkout to apply changes
    */
    generateCheckout() {
        let cart = this.checkout.getCheckout();
        this.checkout = new Checkout({ items: this.getProducts(), offers: this.getOffers() })
        this.checkout.setCheckout(cart);
    }
    /*
   * Add a product in the stock
   */
    addProduct(item) {
        const { id } = item;
        if (!this.stock[id]) {
            this.stock[id] = item
        }
        this.generateCheckout();
        console.log(`Product [${id} - ${item.name}: £${item.price}] added to stock`);
    }
    /*
    * Delete a product in the stock
    */
    deleteProduct(id) {
        if (this.stock[id]) {
            delete this.stock[id];
            this.generateCheckout();
            console.log(`Product ${id} deleted`);
        } else {
            console.log(`Product with id ${id} doesn´t exists`);
        }

    }

    /*
    * Update a product existing in our stock
    */
    updateProduct(item) {
        const { id } = item;
        if (this.stock[id]) {
            this.stock[id] = item;
            this.generateCheckout();
            console.log(`Product [${id} - ${item.name}: £${item.price}] updated to stock`);
        } else {
            console.log(`Product with id: ${id} doesn´t exists`);
        }
    }
    /*
   * Get a product by id in the stock
   */
    getProduct(id) {
        if (this.stock[id]) {
            return this.stock[id];
        } else {
            console.log(`Product with id: ${id} doesn´t exists`);

        }
    }
 /*
   * Get all products in the stock
   */
    getProducts() {
        return this.stock;
    }

    /*
   * Add a offer in the business
   */
    addOffer(offer) {
        const { id } = offer;
        if (!this.offers[id]) {
            this.offers[id] = offer;
            this.generateCheckout();
            console.log(`Offer ${id} added to our offers`);
        } else {
            console.log(`Offer with id ${id} already exists in db`);
        }
    }

      /*
   * Delete a offer by id in the business
   */
    deleteOffer(id) {
        if (this.offers[id]) {
            delete this.offers[id];
            this.generateCheckout();
            console.log(`Offer ${id} deleted`);
        } else {
            console.log(`Offer with id ${id} doesn´t exists`);
        }

    }

     /*
   * Update a offer in the business
   */
    updateOffer(offer) {
        const { id } = offer;
        if (this.offers[id]) {
            this.offers[id] = offer;
            this.generateCheckout();
            console.log(`Offer ${id} - updated`);
        } else {
            console.log(`Offer with id: ${id} doesn´t exists`);
        }

    }
      /*
   * Get a offer by id in the business
   */
    getOffer(id) {
        if (this.offers[id]) {
            return this.offers[id];
        }
    }
 /*
   * Get all offers in the business
   */
    getOffers() {
        return this.offers;
    }
}

module.exports = Business;