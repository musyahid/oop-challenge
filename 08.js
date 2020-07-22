class Cart {
    // add getter for value
    get totalItems() {
      return this.value;
    }


    addItem(value) {
        this.value = value[]
        return this
      }

    add(value) {
        this.value = this.value + value;
        return this;
      }
  }
  
  
  const cart = new Cart()
  cart.addItem({ item_id: 1, price: 30000, quantity: 3 })
        .addItem({ item_id: 2, price: 10000 })             
        .addItem({ item_id: 3, price: 5000, quantity: 2 })
        .addItem({ item_id: 4, price: 400, quantity: 6 })
    .totalItems         

    console.log(cart.totalItems)