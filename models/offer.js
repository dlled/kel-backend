class Offer {

  // OFFER CONSTRUCTOR

  /*
  * Takes the offer id, the article offered, the offer type being
  * B => Base discount (10 % on all products ) from the threshold,
  * P => Proportional discount BUY Thresold, PAY N
  * Discount depends on the offer type you choose 
  */

  constructor( id, article, type, threshold = 0, discount){
    this.id = id;
    this.article = article;
    this.type = (type == 'B' || 'P') ? type : 'B';
    this.threshold = threshold;
    this.discount = discount;
  }

}

module.exports = Offer;

