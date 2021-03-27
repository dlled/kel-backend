const Business = require('./models/business');
const bs = new Business();
const { readInput, getMenu, inquirerPause, listItems } = require('./helpers/inquirer');
const Offer = require('./models/offer');
const { makeOffer, makeProduct } = require('./helpers/utils');

var inApp = true;
var selecting = false

let opt = -1
let opt1 = -1
let opt2 = -1

const main = async () => {
    do {
        console.clear()
        opt = await getMenu('init');

        switch (opt) {

            case 1:
                do {
                    console.clear()
                    console.log('CART: ', bs.checkout.getCheckout());
                    opt1 = await getMenu('user');

                    switch (opt1) {
                        case 1:
                            let id = await readInput('Scan a ID');
                            bs.checkout.scan(id);
                            break;
                        case 2:
                            console.log('Get available products');
                            console.log(bs.getProducts());
                            break;
                        case 3:
                            console.log('Get available offers');
                            console.log(bs.getOffers());
                            break;
                        case 4:
                            console.log('Show my cart');
                            console.log(bs.checkout.getCheckout());
                            break;
                        case 5:
                            console.log('CART: ', bs.checkout.getCheckout());
                            console.log('TOTAL: £', bs.checkout.checkprice());
                            break;
                        case 6:
                            bs.checkout.emptyCart();
                            console.log('CART: ', bs.checkout.getCheckout());
                            break;
                        case 0:
                            console.log('BYE');
                            break;
                    }
                    await inquirerPause();
                } while (opt1 !== 0)
                break;
            case 2:
                do {
                    console.clear()
                    opt2 = await getMenu('admin');
                    switch (opt2) {

                        case 1:
                            console.log('Init mock data');
                            console.log(bs.mockInit());
                            break;
                        case 2:
                            // Add an offer to the business
                            const newProduct = await makeProduct();
                            bs.addProduct(newProduct);
                            break;
                        case 3:
                            // Add an offer to the business
                            const newOffer = await makeOffer();
                            bs.addOffer(newOffer);
                            break;
                        case 4:
                            // Remove product
                            const itemToRemove = await listItems(Object.values(bs.getProducts()));
                            if (itemToRemove == 0) {
                                console.log('Canceled');
                            } else {
                                bs.deleteProduct(itemToRemove);
                                console.log('Item Removed')
                                console.log(bs.getProducts);
                            }
                            break;
                        case 5:
                            // Remove offer
                            const offerToRemove = await listItems(Object.values(bs.getOffers()));
                            if (offerToRemove == 0) {
                                console.log('Canceled');
                            } else {
                                bs.deleteOffer(offerToRemove);
                                console.log('Offer Removed')
                            }
                            break;
                        case 6:
                            console.log('----- PRODUCTS -----');
                            console.log(bs.getProducts());
                            console.log('------ OFFERS ------');
                            console.log(bs.getOffers());
                            break;
                        case 0:
                            console.log('BYE');
                            break;
                    }
                    await inquirerPause();
                } while (opt2 !== 0)
                break;
            case 0:
                console.log('BYE');
                break;
        }

    } while (opt !== 0)
}

main();
//console.log(bs.getProducts());
//console.log(bs.getOffers());
//console.log(bs.checkout.checkprice())
//console.log(bs.getOffer('buy-one-get-one-free'));
//console.log(bs.getOffers());
// bs.deleteProduct(item1.id);
// item3.name = 'PruebaUpdate';
// item3.price = 45;
// bs.updateProduct(item3);
// bs.updateProduct(item4);
// console.log(bs.getProducts());
// console.log(bs.getProduct('GR1'));
