class ShoppingBasket {

  constructor() {
    this.items = [];
  }

  addItem(candy) {
    this.items.push(candy); 
  }


  getTotalPrice() {
    let sum = 0;
    this.items.map(item => {
      sum += item.getPrice();
    });
    return sum;
  }
}

module.exports = ShoppingBasket;
