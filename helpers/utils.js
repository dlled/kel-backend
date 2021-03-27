const Item = require('../models/item');
const Offer = require('../models/offer');
const { readInput } = require('./inquirer');

const makeOffer = async () => {

    let id = await readInput('Add an offer name');
    let article = await readInput('Article to offer');
    let type = await readInput('Type of the offer [B (Base) | P (Proportional)]');
    let threshold = ""
    let discount = ""

    switch (type) {
        case 'B':
            threshold = await readInput('Enter the number of products to get the discount:');
            discount = await readInput('Enter discount (%):');
            break;
        case 'P':
            threshold = await readInput('Enter number of products to get the offer:');
            discount = await readInput('Enter number articles to pay:');
            break;
    }

    return new Offer(
        id,
        article,
        type,
        threshold,
        discount
    );
}

const makeProduct = async () => {

    let id = await readInput('Product id:');
    let name = await readInput('Product name:');
    let price = await readInput('price (£):');


    return new Item(id, name, price);
}

module.exports = {
    makeOffer,
    makeProduct
}