Drink.prototype.getMenu = function () {
  console.log(
    `your drink is ${this.iced ? "iced" : "hot"} ${this.name}(${this.size})`
  );
};

function Drink(name, iced) {
  this.name = name;
  this.iced = iced;
  this.size = "small";
}

const iced_latte = new Drink("latte", true);
const hot_americano = new Drink("americano", false);

iced_latte.getMenu();
hot_americano.getMenu();
