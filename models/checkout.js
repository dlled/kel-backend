class Checkout {
  constructor(data){
    this.checkout = [];
    const {offers, items} = data;
    this.items = items;
    this.offers = offers;
  }

  scan(id){
      if(this.items[id]){
        this.checkout.push(id);
      } else {
        console.log('Item doesn´t exists');
      } 
  }

  getCheckout(){
    return this.checkout;
  }

  setCheckout(cart){
    this.checkout = cart;
  }

  total(){
    return {};
  }

  getFullCart(){
    const cart = {}
    this.checkout.forEach((item) => {
      (!cart[item]) ? (cart[item] = 1) : cart[item]++;
    });
    return cart;
  }

  checkOffer(cart) {
     
  }
  
  emptyCart(){
    this.checkout = []
  }

  checkprice(){
    const offeredArticles = Object.values(this.offers).map((offer) => offer.article); 
    const cart = this.getFullCart();
    let total = 0;
    Object.keys(cart).forEach((key) => {
        const price = this.items[key].price;
        if(offeredArticles.includes(key)){
          const validOffers = Object.values(this.offers).filter(offer => offer.article === key );
          validOffers.forEach((offer) => {
            switch(offer.type){
              case 'P':
                if(cart[key] >= offer.threshold){
                  console.log('HERE', cart[key])
                  const nOffers = Math.trunc(cart[key]/offer.threshold);
                  total += (cart[key] - nOffers * (offer.threshold - offer.discount)) * price;
                } else {
                  total += cart[key] * price;
                }
                break;
              case 'B':
                if(cart[key] >= offer.threshold){
                  total += cart[key] * price * (1 - offer.discount * 0.01);
                } else {
                  total += cart[key] * price;
                }
                break;
            }
          })
        } else {
          total += cart[key]*price;
        }
    })
    return total;
  }
  

}


module.exports = Checkout;