class Shipping {
  constructor() {
    this.company = '';
  }

  setStrategy(company) {
    this.company = company;
  }

  calculate(distance) {
    return this.company.calculate(distance);
  }
}

class Correios {
  calculate(distance) {
    return distance * 0;
  }
}

class Jadlog {
  calculate(distance) {
    return distance * 1.75;
  }
}

const distance = 20;
const shipping = new Shipping();
const correios = new Correios();
const jadlog = new Jadlog();

shipping.setStrategy(correios);
console.log(shipping.calculate(distance));
shipping.setStrategy(jadlog);
console.log(shipping.calculate(distance));
